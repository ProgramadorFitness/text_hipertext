<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstudiantesCursosTable extends Migration
{
    public function up()
    {
        Schema::create('estudiantes_cursos', function (Blueprint $table) {
            $table->foreignId('id_estudiante')->constrained('estudiantes')->onDelete('cascade');
            $table->foreignId('id_curso')->constrained('cursos')->onDelete('cascade');
            $table->primary(['id_estudiante', 'id_curso']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('estudiantes_cursos');
    }
}
