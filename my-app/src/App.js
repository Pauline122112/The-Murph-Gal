import React from 'react'
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
	{
		id: 1,
		username: 'Murphy',
		testimonial: 'I do not know what to say'
	},
	{
		id: 2,
		username: 'Jason',
		testimonial: 'I do not know what to say'
	},
	{
		id: 3,
		username: 'Pauline',
		testimonial: 'I do not know what to say'
	},
	{
		id: 4,
		username: 'Humphry',
		testimonial: 'I do not know what to say'
	},

]

function App() {
  return (
		<div className="App">
			<h1>Swiper JS</h1>
			<Swiper
				spaceBetween={0}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{data.map((user) => (
					<SwiperSlide key={user.id} className="slide">
						<div className="slide-content">
							<div className="user-image1">
								<img src="/image1.png" alt="" className="user-photo" />
							</div>
							<div className="sliding">
								<div className="user-image2">
									<img src="/image2.png" alt="" className="user-photo" />
								</div>
							</div>

							<h5>{user.username}</h5>

							<p className="user-testimonial">
								{" "}
								" <i>{user.testimonial}</i> "
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default App;
