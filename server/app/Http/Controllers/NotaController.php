<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NotaController extends Controller
{
    public function index()
    {
        return Nota::with(['estudiante', 'materia', 'curso'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_estudiante' => 'required|exists:estudiantes,id',
            'id_materia' => 'required|exists:materias,id',
            'id_curso' => 'required|exists:cursos,id',
            'nota' => 'required|numeric|min:0|max:10',
            'fecha' => 'required|date',
        ]);

        $nota = Nota::create($validated);

        return response()->json($nota, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $nota = Nota::with(['estudiante', 'materia', 'curso'])->findOrFail($id);
        return response()->json($nota);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_estudiante' => 'nullable|exists:estudiantes,id',
            'id_materia' => 'nullable|exists:materias,id',
            'id_curso' => 'nullable|exists:cursos,id',
            'nota' => 'nullable|numeric|min:0|max:10',
            'fecha' => 'nullable|date',
        ]);

        $nota = Nota::findOrFail($id);
        $nota->update($validated);

        return response()->json($nota);
    }

    public function destroy($id)
    {
        $nota = Nota::findOrFail($id);
        $nota->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
