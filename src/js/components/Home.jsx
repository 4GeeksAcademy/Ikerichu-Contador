

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex mx-5 justify-content-evenly align-items-center" style={{minHeight: "100vh"}}>
			
			<h1>{Math.floor((props.count/100000)%10)}</h1>
			<h1>{Math.floor((props.count/10000)%10)}</h1>
			<h1>{Math.floor((props.count/1000)%10)}</h1>
			<h1>{Math.floor((props.count/100)%10)}</h1>
			<h1>{Math.floor((props.count/10)%10)}</h1>
			<h1>{Math.floor(props.count%10)}</h1>
		</div>
	);
};

export default Home;