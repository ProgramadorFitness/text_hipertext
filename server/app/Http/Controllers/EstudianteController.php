<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EstudianteController extends Controller
{
    public function index()
    {
        return Estudiante::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'apellido' => 'required|string|max:100',
            'fecha_nacimiento' => 'required|date',
            'email' => 'required|email|unique:estudiantes,email',
            'telefono' => 'nullable|string|max:20',
        ]);

        $estudiante = Estudiante::create($validated);

        return response()->json($estudiante, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        return response()->json($estudiante);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'nullable|string|max:100',
            'apellido' => 'nullable|string|max:100',
            'fecha_nacimiento' => 'nullable|date',
            'email' => 'nullable|email|unique:estudiantes,email,' . $id,
            'telefono' => 'nullable|string|max:20',
        ]);

        $estudiante = Estudiante::findOrFail($id);
        $estudiante->update($validated);

        return response()->json($estudiante);
    }

    public function destroy($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
