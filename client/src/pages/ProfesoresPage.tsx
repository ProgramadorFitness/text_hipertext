import React, { useState, useEffect } from 'react';
import ProfesoresTable from '../components/ProfesoresTable';
import ProfesorModal from '../components/ProfesorModal';
import { Profesor } from '../models/models';
import axios from 'axios';

const ProfesoresPage: React.FC = () => {
    const [profesores, setProfesores] = useState<Profesor[]>([]);
    const [selectedProfesor, setSelectedProfesor] = useState<Profesor | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProfesores = async () => {
            const response = await axios.get('/api/profesores');
            setProfesores(response.data);
        };
        fetchProfesores();
    }, []);

    const handleAdd = () => {
        setSelectedProfesor(null);
        setIsModalOpen(true);
    };

    const handleEdit = (profesor: Profesor) => {
        setSelectedProfesor(profesor);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/profesores/${id}`);
        setProfesores(profesores.filter(p => p.id !== id));
    };

    const handleSave = async (profesor: Profesor) => {
        if (profesor.id) {
            await axios.put(`/api/profesores/${profesor.id}`, profesor);
        } else {
            await axios.post('/api/profesores', profesor);
        }
        setIsModalOpen(false);
        setSelectedProfesor(null);
        const response = await axios.get('/api/profesores');
        setProfesores(response.data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProfesor(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 mb-4"
            >
                Add Profesor
            </button>
            <ProfesoresTable
                profesores={profesores}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <ProfesorModal
                profesor={selectedProfesor}
                onSave={handleSave}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default ProfesoresPage;
