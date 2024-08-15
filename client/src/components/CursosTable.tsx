import React from 'react';
import { Curso } from '../models/models';

interface Props {
    cursos: Curso[];
    onEdit: (curso: Curso) => void;
    onDelete: (id: number) => void;
}

const CursosTable: React.FC<Props> = ({ cursos, onEdit, onDelete }) => {
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
                {cursos.map(curso => (
                    <tr key={curso.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{curso.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{curso.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{curso.descripcion}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                                onClick={() => onEdit(curso)}
                                className="text-blue-600 hover:text-blue-900"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(curso.id)}
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

export default CursosTable;
