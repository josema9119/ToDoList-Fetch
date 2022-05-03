import React, { useState, useEffect } from "react";
import List from "./list.js";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = () => {
		setList([...list, { label: task, done: false }]);
		setTask("");
		putOn([...list, { label: task, done: false }]);
	};
	const deleteTask = (indexList) => {
		setList(() => list.filter((value, index) => index !== indexList));
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
	const putOn = async (newList) => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/josema9119",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newList),
			}
		);
	};

	const fetchList = async () => {};
	return (
		<div className="container bg-light justify-content-center">
			<h1 className=" mx-auto text-center">Todo´s List</h1>
			<div className="container bg-light justify-content-center">
				<input
					onChange={(e) => setTask(e.target.value)}
					value={task}
					type="text"
					className="col-4 border-0 d-flex self-align-center"
					placeholder="Task"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							task !== "" && task !== " "
								? setList([...list, task])
								: null;
							setTask("");
						}
					}}></input>
				<ul className="list-group">
					{list.map((task, index) => (
						<List
							key={index}
							inputTask={task}
							quit={() => deleteTask(index)}
						/>
					))}

					<span className="col-4 border-0 shadow p-3 bg-white">
						{list.length === 0
							? "No task, add a task"
							: list.length + " item left"}
					</span>
				</ul>
			</div>
		</div>
	);
};

export default Home;
