import React from 'react';
import { Materia } from '../models/models';

interface Props {
    materias: Materia[];
    onEdit: (materia: Materia) => void;
    onDelete: (id: number) => void;
}

const MateriasTable: React.FC<Props> = ({ materias, onEdit, onDelete }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {materias.map(materia => (
                    <tr key={materia.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{materia.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{materia.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{materia.descripcion}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                                onClick={() => onEdit(materia)}
                                className="text-blue-600 hover:text-blue-900"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(materia.id)}
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

export default MateriasTable;
