import React, { useState } from "react";
export function Home() {
	// 01 - Crear un array
	const [todos, setTodos] = useState(["tarea 1", "tareas 2", "tarea 3"]);
	/// 02 guardar texto que digito el usuario
	const [task, setTask] = useState("");
	return (
		// 03 Hacer el formulario
		<div className="text-center mt-5">
			<h1>TODO LIST</h1>
			<span>{JSON.stringify(task)}</span>
			<form
				onSubmit={evento => {
					evento.preventDefault();
					setTodos([...todos, task]);
					setTask("");
				}}>
				<input
					placeholder="Ingrese su tarea"
					onChange={evento => setTask(evento.target.value)}
					value={task}></input>
				<button>Agregar</button>
			</form>
			{/* 04 mostrar el contenido del arreglo */}
			<ul>
				{todos.map((item, index) => {
					return (
						<li key={index}>
							<span>{item}</span>
							<button
								onClick={() =>
									console.log(
										"eliminar elemento",
										index,
										"contenido:",
										todos[index]
									)
								}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
