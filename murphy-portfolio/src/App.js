import React, { useEffect, useState } from "react";
import "./App.css";

import { CarouselWrapper, next, prev, moveTo } from "react-pretty-carousel";

function App() {
	const [items, setItems] = useState(3);

	useEffect(() => {
		if (window.innerWidth < 576) setItems(1);
		else setItems(3);
		window.addEventListener("resize", () => {
			if (window.innerWidth < 576) setItems(1);
			else setItems(3);
		});
	}, []);
	return (
		<div className="App">
			<CarouselWrapper items={items} mode="gallery">
				<div className="image image1"></div>
				<div className="image image2"></div>
				<div className="image image3"></div>
				<div className="image image4"></div>
				<div className="image image5"></div>
				<div className="image image6"></div>
			</CarouselWrapper>
			<div className="container">
				<h1>React-Pretty-Carousel</h1>
				<span>Easily add beautiful carousels to your website in no time!</span>
				<h2>Installation</h2>
				<span>
					In order to install <monospace>react-pretty-carousel</monospace>, run
					this command in your terminal.
				</span>
				<code>npm i react-pretty-carousel --save</code>
				Or
				<code>yarn add react-pretty-carousel</code>
				<h2>Usage</h2>
				<img
					src="https://dev-to-uploads.s3.amazonaws.com/i/pucte4kmw5ssnebpapyj.png"
					alt="Usage"
				/>
				<h2>Props</h2>
				<table>
					<tr>
						<th>Prop</th>
						<th>DataType</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>items</td>
						<td>integer</td>
						<td>Number of items to display at once</td>
					</tr>
					<tr>
						<td>mode</td>
						<td>string</td>
						<td>
							Style of the carousel, can be either <monospace>normal</monospace>{" "}
							or <monospace>gallery</monospace>
						</td>
					</tr>
					<tr>
						<td>showControls</td>
						<td>boolean</td>
						<td>
							Show the dots and navigation buttons if{" "}
							<monospace>true</monospace>, and otherwise if{" "}
							<monospace>false</monospace>
						</td>
					</tr>
				</table>
				<h2>External Functions and Values</h2>
				<span>
					You can summon and move/navigate through the carousel by importing and
					using the following functions:
				</span>
				<code>
					{`import {CarouselWrapper, prev, next, moveTo, switchTo, presentIndex} from "react-pretty-carousel";`}
				</code>
				<table>
					<tr>
						<th>Function</th>
						<th>Description</th>
						<th>Parameters</th>
					</tr>
					<tr>
						<td>prev()</td>
						<td>Move to the previous slide</td>
						<td>none</td>
					</tr>
					<tr>
						<td>next()</td>
						<td>Move to the next slide</td>
						<td>none</td>
					</tr>
					<tr>
						<td>moveTo(5)</td>
						<td>Move to a certain index/object with smooth animation</td>
						<td>integer</td>
					</tr>
					<tr>
						<td>switchTo(5)</td>
						<td>Abruptly move to a certain index/object</td>
						<td>integer</td>
					</tr>
					<tr>
						<td>presentIndex</td>
						<td>
							Get the present index of the carousel object being displayed
						</td>
						<td>none</td>
					</tr>
				</table>
			</div>
			<div className="footer">
				<div className="container">
					<span>
						Created by <a href="https://github.com/Jaagrav">Jaagrav</a>
					</span>
					<a href="https://github.com/Jaagrav/react-pretty-carousel/">
						<i class="fab fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
