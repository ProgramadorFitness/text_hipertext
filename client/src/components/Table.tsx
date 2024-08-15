import React from 'react';

interface TableProps<T> {
    columns: { header: string; accessor: keyof T }[];
    data: T[];
    onEdit: (item: T) => void;
    onDelete: (id: number) => void;
}

const Table = <T,>({ columns, data, onEdit, onDelete }: TableProps<T>) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {col.header}
                        </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {item[col.accessor]}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                                onClick={() => onEdit(item)}
                                className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete((item as any).id)}
                                className="text-red-600 hover:text-red-900"
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

export default Table;
