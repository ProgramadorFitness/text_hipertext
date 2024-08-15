import React, { useState, useEffect } from 'react';
import EstudiantesTable from '../components/EstudiantesTable';
import EstudianteModal from '../components/EstudianteModal';
import { Estudiante } from '../models/models';
import axios from 'axios';

const EstudiantesPage: React.FC = () => {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
    const [selectedEstudiante, setSelectedEstudiante] = useState<Estudiante | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            const response = await axios.get('/api/estudiantes');
            setEstudiantes(response.data);
        };
        fetchEstudiantes();
    }, []);

    const handleAdd = () => {
        setSelectedEstudiante(null);
        setIsModalOpen(true);
    };

    const handleEdit = (estudiante: Estudiante) => {
        setSelectedEstudiante(estudiante);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/estudiantes/${id}`);
        setEstudiantes(estudiantes.filter(est => est.id !== id));
    };

    const handleSave = async (estudiante: Estudiante) => {
        if (estudiante.id) {
            await axios.put(`/api/estudiantes/${estudiante.id}`, estudiante);
        } else {
            await axios.post('/api/estudiantes', estudiante);
        }
        setIsModalOpen(false);
        setSelectedEstudiante(null);
        const response = await axios.get('/api/estudiantes');
        setEstudiantes(response.data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEstudiante(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 mb-4"
            >
                Add Estudiante
            </button>
            <EstudiantesTable
                estudiantes={estudiantes}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <EstudianteModal
                estudiante={selectedEstudiante}
                onSave={handleSave}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default EstudiantesPage;
