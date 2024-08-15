import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EstudiantesPage from './pages/EstudiantesPage';
import MateriasPage from './pages/MateriasPage';
import NotasPage from './pages/NotasPage';
import ProfesoresPage from './pages/ProfesoresPage';
import CursosPage from './pages/CursosPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/estudiantes" element={<EstudiantesPage />} />
                    <Route path="/cursos" element={<CursosPage />} />
                    <Route path="/materias" element={<MateriasPage />} />
                    <Route path="/notas" element={<NotasPage />} />
                    <Route path="/profesores" element={<ProfesoresPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
