import React, { useState, useEffect } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = () => {
		setList([...list, { label: task, done: false }]);
		setTask("");
	};

	useEffect(() => {
		fetchTask();
	}, []);

	const fetchTask = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/josema9119",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const task1 = await response.json();
		setList(task1);
	};

	const fetchList = async () => {};
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
					<table className="table table-success table-striped">
						<tbody>
							{list.map((tasks, index) => (
								<tr key={index}>
									{tasks.label}
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
