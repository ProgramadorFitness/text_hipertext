import React, { useState, useEffect } from 'react';
import { Materia } from '../models/models';

interface Props {
    materia: Materia | null;
    onSave: (materia: Materia) => Promise<void>;
    onCancel: () => void;
}

const MateriaModal: React.FC<Props> = ({ materia: initialMateria, onSave, onCancel }) => {
    const [materia, setMateria] = useState<Materia>({
        id: 0,
        nombre: '',
        descripcion: ''
    });

    useEffect(() => {
        if (initialMateria) {
            setMateria(initialMateria);
        } else {
            setMateria({
                id: 0,
                nombre: '',
                descripcion: ''
            });
        }
    }, [initialMateria]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMateria(prevMateria => ({ ...prevMateria, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(materia);
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">{materia.id ? 'Edit Materia' : 'Add Materia'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">ID</label>
                        <input
                            type="number"
                            name="id"
                            value={materia.id || ''}
                            onChange={handleChange}
                            readOnly={!!materia.id}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={materia.nombre}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Descripción</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={materia.descripcion || ''}
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

export default MateriaModal;
