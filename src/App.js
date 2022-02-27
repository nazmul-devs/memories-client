import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import Form from "./component/form/Form";
import Posts from "./component/posts/Posts";
import makeStyles from "./style.js";
const memories =
	"https://www.clipartmax.com/png/small/317-3178822_memories-clipart-transparent-memories-icon-png.png";

function App() {
	const classes = makeStyles();
	return (
		<Container maxidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2">
					Memories
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="logo"
					width={50}
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						space="4"
					>
						<Grid items xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid items xs={12} sm={5}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
