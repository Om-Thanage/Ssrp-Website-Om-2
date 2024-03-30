import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import kjsit1 from './Collaborators/kjsit image 1.jpg';
import kjsit2 from './Collaborators/kjsit image 2.jpg';

export default function Collaborators_slider() { 
return ( 
	<div> 
	<Carousel> 
		<Carousel.Item interval={1000}> 
		<img className="d-block w-100" src={kjsit1} alt="Image One"/>  
		</Carousel.Item> 
		<Carousel.Item interval={1000}> 
		<img className="d-block w-100" src={kjsit2} alt="KJSIT"/> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}
