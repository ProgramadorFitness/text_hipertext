import React, { useState, useEffect } from 'react';
import MateriasTable from '../components/MateriasTable';
import MateriaModal from '../components/MateriaModal';
import { Materia } from '../models/models';
import axios from 'axios';

const MateriasPage: React.FC = () => {
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [selectedMateria, setSelectedMateria] = useState<Materia | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchMaterias = async () => {
            const response = await axios.get('/api/materias');
            setMaterias(response.data);
        };
        fetchMaterias();
    }, []);

    const handleAdd = () => {
        setSelectedMateria(null);
        setIsModalOpen(true);
    };

    const handleEdit = (materia: Materia) => {
        setSelectedMateria(materia);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/materias/${id}`);
        setMaterias(materias.filter(m => m.id !== id));
    };

    const handleSave = async (materia: Materia) => {
        if (materia.id) {
            await axios.put(`/api/materias/${materia.id}`, materia);
        } else {
            await axios.post('/api/materias', materia);
        }
        setIsModalOpen(false);
        setSelectedMateria(null);
        const response = await axios.get('/api/materias');
        setMaterias(response.data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMateria(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 mb-4"
            >
                Add Materia
            </button>
            <MateriasTable
                materias={materias}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <MateriaModal
                materia={selectedMateria}
                onSave={handleSave}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default MateriasPage;
