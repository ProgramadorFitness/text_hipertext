import React from 'react';
import { Nota } from '../models/models';

interface Props {
    notas: Nota[];
    onEdit: (nota: Nota) => void;
    onDelete: (id: number) => void;
}

const NotasTable: React.FC<Props> = ({ notas, onEdit, onDelete }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materia ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nota</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {notas.map(nota => (
                    <tr key={nota.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.id_estudiante}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.id_materia}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.id_curso}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.nota}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{nota.fecha}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                                onClick={() => onEdit(nota)}
                                className="text-blue-600 hover:text-blue-900"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(nota.id)}
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

export default NotasTable;
