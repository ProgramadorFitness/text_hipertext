import React, { useState, useEffect } from 'react';
import NotasTable from '../components/NotasTable';
import NotaModal from '../components/NotaModal';
import { Nota } from '../models/models';
import axios from 'axios';

const NotasPage: React.FC = () => {
    const [notas, setNotas] = useState<Nota[]>([]);
    const [selectedNota, setSelectedNota] = useState<Nota | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchNotas = async () => {
            const response = await axios.get('/api/notas');
            setNotas(response.data);
        };
        fetchNotas();
    }, []);

    const handleAdd = () => {
        setSelectedNota(null);
        setIsModalOpen(true);
    };

    const handleEdit = (nota: Nota) => {
        setSelectedNota(nota);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/notas/${id}`);
        setNotas(notas.filter(n => n.id !== id));
    };

    const handleSave = async (nota: Nota) => {
        if (nota.id) {
            await axios.put(`/api/notas/${nota.id}`, nota);
        } else {
            await axios.post('/api/notas', nota);
        }
        setIsModalOpen(false);
        setSelectedNota(null);
        const response = await axios.get('/api/notas');
        setNotas(response.data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedNota(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 mb-4"
            >
                Add Nota
            </button>
            <NotasTable
                notas={notas}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <NotaModal
                nota={selectedNota}
                onSave={handleSave}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default NotasPage;
