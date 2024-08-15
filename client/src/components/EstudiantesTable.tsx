import React from 'react';
import { Estudiante } from '../models/models';

interface Props {
    estudiantes: Estudiante[];
    onEdit: (estudiante: Estudiante) => void;
    onDelete: (id: number) => void;
}

const EstudiantesTable: React.FC<Props> = ({ estudiantes, onEdit, onDelete }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {estudiantes.map(estudiante => (
                    <tr key={estudiante.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.apellido}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.fecha_nacimiento}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{estudiante.telefono}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                                onClick={() => onEdit(estudiante)}
                                className="text-blue-600 hover:text-blue-900"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(estudiante.id)}
                                className="text-red-600 hover:text-red-900 ml-4"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EstudiantesTable;
