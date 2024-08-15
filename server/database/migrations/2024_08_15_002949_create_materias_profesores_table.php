<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMateriasProfesoresTable extends Migration
{
    public function up()
    {
        Schema::create('materias_profesores', function (Blueprint $table) {
            $table->foreignId('id_materia')->constrained('materias')->onDelete('cascade');
            $table->foreignId('id_profesor')->constrained('profesores')->onDelete('cascade');
            $table->primary(['id_materia', 'id_profesor']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('materias_profesores');
    }
}
