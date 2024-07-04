import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../services/students";


export function RepresentativeView() {
    const { CI } = useParams()
    const [student, setStudent] = useState(null)

    useEffect(() => {
        (async () => {
            const student = await getStudent(CI)
            setStudent(student)
        })()
    })
    

    const notas = [
        { año: 1, asignatura: 'Matemáticas', profesor: 'Juan Pérez', nota: 18 },
        { año: 2, asignatura: 'Historia', profesor: 'María López', nota: 20 },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <span>Nombre: <strong>Nombre del Estudiante</strong></span>
                        <span>Apellido: <strong>Apellido del Estudiante</strong></span>
                        <span>Cédula: <strong>12345678</strong></span>
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 border-b">Año</th>
                            <th className="py-2 px-4 border-b">Asignatura</th>
                            <th className="py-2 px-4 border-b">Profesor</th>
                            <th className="py-2 px-4 border-b">Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notas.map((nota, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-2 px-4 border-b">{nota.año}</td>
                                <td className="py-2 px-4 border-b">{nota.asignatura}</td>
                                <td className="py-2 px-4 border-b">{nota.profesor}</td>
                                <td className="py-2 px-4 border-b">{nota.nota}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
