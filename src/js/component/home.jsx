import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};
	return (
		<div className="back">
			<div className="container">
				<h1 className="row mx-auto">Lista de tareas</h1>
				<div className="d-table-row mx-auto">
					<div className="input-group mb-3">
						<button
							className="input-group-text"
							id="basic-addon1"
							onClick={addTask}>
							Añadir Tarea
						</button>
						<input
							onChange={(e) => setTask(e.target.value)}
							value={task}
							type="text"
							className="form-control"
							placeholder="Tarea"
							aria-label="Username"
							aria-describedby="basic-addon1"></input>
					</div>
					<table class="table table-success table-striped">
						<tbody>
							{list.map((tasks, index) => (
								<tr key={index}>
									{tasks}
									<button
										onClick={() => {
											setList(
												list.filter(
													(a, b) => b != index
												)
											);
										}}
										className="button border-0 rounded pt-1 pb-1">
										x
									</button>
								</tr>
							))}
						</tbody>
					</table>
					{list.length + " Tareas añadidas"}
				</div>
			</div>
		</div>
	);
};

export default Home;
