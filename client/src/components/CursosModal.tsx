import React, { useState, useEffect } from 'react';
import { Curso } from '../models/models';

interface Props {
    curso: Curso | null;
    onSave: (curso: Curso) => Promise<void>;
    onCancel: () => void;
}

const CursoModal: React.FC<Props> = ({ curso: initialCurso, onSave, onCancel }) => {
    const [curso, setCurso] = useState<Curso>({
        id: 0,
        nombre: '',
        descripcion: ''
    });

    useEffect(() => {
        if (initialCurso) {
            setCurso(initialCurso);
        } else {
            setCurso({
                id: 0,
                nombre: '',
                descripcion: ''
            });
        }
    }, [initialCurso]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurso(prevCurso => ({ ...prevCurso, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(curso);
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">{curso.id ? 'Edit Curso' : 'Add Curso'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">ID</label>
                        <input
                            type="number"
                            name="id"
                            value={curso.id || ''}
                            onChange={handleChange}
                            readOnly={!!curso.id}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={curso.nombre}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Descripción</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={curso.descripcion || ''}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CursoModal;
