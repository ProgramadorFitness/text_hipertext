import React, { useState, useEffect } from 'react';
import CursosTable from '../components/CursosTable';
import CursoModal from '../components/CursoModal';
import { Curso } from '../models/models';
import axios from 'axios';

const CursosPage: React.FC = () => {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchCursos = async () => {
            const response = await axios.get('/api/cursos');
            setCursos(response.data);
        };
        fetchCursos();
    }, []);

    const handleAdd = () => {
        setSelectedCurso(null);
        setIsModalOpen(true);
    };

    const handleEdit = (curso: Curso) => {
        setSelectedCurso(curso);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/cursos/${id}`);
        setCursos(cursos.filter(c => c.id !== id));
    };

    const handleSave = async (curso: Curso) => {
        if (curso.id) {
            await axios.put(`/api/cursos/${curso.id}`, curso);
        } else {
            await axios.post('/api/cursos', curso);
        }
        setIsModalOpen(false);
        setSelectedCurso(null);
        const response = await axios.get('/api/cursos');
        setCursos(response.data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCurso(null);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 mb-4"
            >
                Add Curso
            </button>
            <CursosTable
                cursos={cursos}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <CursoModal
                curso={selectedCurso}
                onSave={handleSave}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default CursosPage;
