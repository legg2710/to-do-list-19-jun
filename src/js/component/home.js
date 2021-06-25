import React, { useState } from "react";
export function Home() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	function todosEliminar(index) {
		if (index > -1) {
			console.log("eliminar");
			const filterList = todos.filter(item => item !== todos[index]);
			setTodos(filterList);
		}
	}
	return (
		<div className="text-center mt-5">
			<h1 className="display-4">To Do List</h1>

			<form
				onSubmit={evento => {
					evento.preventDefault();
					setTodos([...todos, task]);
					setTask("");
				}}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese su tarea"
						onChange={evento => setTask(evento.target.value)}
						value={task}></input>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button">
							Agregar
						</button>
					</div>
				</div>
			</form>
			{/* 04 mostrar el contenido del arreglo */}
			<ul className="list-group list-group-flush">
				{todos.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							<span>{item}</span>
							<button
								className="btn btn-light float-right"
								onClick={
									() => todosEliminar(index)
									// index,
									// "contenido:",
									// todos[index]
								}>
								<i
									className="fa fa-trash"
									aria-hidden="true"></i>
							</button>
						</li>
					);
				})}
			</ul>
			<div>
				<p className="text-muted">
					{todos.length}
					{""} item left
				</p>
			</div>
		</div>
	);
}
