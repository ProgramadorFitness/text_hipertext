<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProfesorController extends Controller
{
    public function index()
    {
        return Profesor::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'apellido' => 'required|string|max:100',
            'email' => 'required|email|unique:profesores,email',
            'telefono' => 'nullable|string|max:20',
        ]);

        $profesor = Profesor::create($validated);

        return response()->json($profesor, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $profesor = Profesor::findOrFail($id);
        return response()->json($profesor);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'nullable|string|max:100',
            'apellido' => 'nullable|string|max:100',
            'email' => 'nullable|email|unique:profesores,email,' . $id,
            'telefono' => 'nullable|string|max:20',
        ]);

        $profesor = Profesor::findOrFail($id);
        $profesor->update($validated);

        return response()->json($profesor);
    }

    public function destroy($id)
    {
        $profesor = Profesor::findOrFail($id);
        $profesor->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
