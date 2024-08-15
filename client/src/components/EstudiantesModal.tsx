import React, { useState, useEffect } from 'react';
import { Estudiante } from '../models/models';

interface Props {
    estudiante: Estudiante | null;
    onSave: (estudiante: Estudiante) => Promise<void>;
    onCancel: () => void;
}

const EstudianteModal: React.FC<Props> = ({ estudiante: initialEstudiante, onSave, onCancel }) => {
    const [estudiante, setEstudiante] = useState<Estudiante>({
        id: 0,
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        email: '',
        telefono: ''
    });

    useEffect(() => {
        if (initialEstudiante) {
            setEstudiante(initialEstudiante);
        } else {
            setEstudiante({
                id: 0,
                nombre: '',
                apellido: '',
                fecha_nacimiento: '',
                email: '',
                telefono: ''
            });
        }
    }, [initialEstudiante]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEstudiante(prevEstudiante => ({ ...prevEstudiante, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(estudiante);
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">{estudiante.id ? 'Edit Estudiante' : 'Add Estudiante'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">ID</label>
                        <input
                            type="number"
                            name="id"
                            value={estudiante.id || ''}
                            onChange={handleChange}
                            readOnly={!!estudiante.id}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={estudiante.nombre}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            value={estudiante.apellido}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="fecha_nacimiento"
                            value={estudiante.fecha_nacimiento}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={estudiante.email}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Telefono</label>
                        <input
                            type="text"
                            name="telefono"
                            value={estudiante.telefono || ''}
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

export default EstudianteModal;
