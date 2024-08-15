<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MateriaController extends Controller
{
    public function index()
    {
        return Materia::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $materia = Materia::create($validated);

        return response()->json($materia, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $materia = Materia::findOrFail($id);
        return response()->json($materia);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'nullable|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $materia = Materia::findOrFail($id);
        $materia->update($validated);

        return response()->json($materia);
    }

    public function destroy($id)
    {
        $materia = Materia::findOrFail($id);
        $materia->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
