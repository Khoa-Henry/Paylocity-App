import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Avatar} from '@material-ui/core';
import Mansuit from '../Communitypage/mansuit.jpg';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//testing push to master



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url
    ('https://www.vectorstock.com/royalty-free-vector/people-holding-hands-around-globe-earth-vector-4659255')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-reapeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize:"4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  newsfeedContainer: {
    paddingTop: theme.spacing(3)
  },
  newsfeedTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  CardActions: {
    display: "flex",
    margin: "0 10ox",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
       <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Community
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box> Pay Lots of News</Box>
      </Box>
      <Container maxWidth="lg" className={classes.newsfeedContainer}>
      <Typography variant="h4" className={classes.newsfeedTitle}>
        What's The News?
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="teatalk.jpg"
          title="What's the Tea?"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Annoucements
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ATTENTION TO ALL EMPLOYEES: All employees MUST attend mandortory safety meeting on October 13, 2020 at 1:30pm!!!!! Please be on time!!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
          <Avatar 
          src={Mansuit.jpg}/>
          <Box ml={2}></Box>
          <Typography variant="subtitle2" component="p">
           Christopher Higgins
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            October 14, 2020
            </Typography>
        </Box>
       <Box>
         { /* <BookmarkBorderIcon/> */}
       </Box>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shout Outs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          We would like to give a BIG SHOUTOUT to Megan for best attendance this year!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
          <Avatar 
          src="./mansuit2.jpg"/>
          <Box ml={2}></Box>
          <Typography variant="subtitle2" component="p">
            Kyle Smith
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            October 14, 2020
            </Typography>
        </Box>
       <Box>
         {/* <BookmarkBorderIcon/> */}
       </Box>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pay Lots Of News
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
          <Avatar 
          src={Mansuit.jpg}/>
          <Box ml={2}></Box>
          <Typography variant="subtitle2" component="p">
            Maria Sanchaez
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            October 14, 2020
            </Typography>
        </Box>
       <Box>
         {/* <BookmarkBorderIcon/> */}
       </Box>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COVID-19 Updates
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Covid cases continue to skyrocket as the summer comes to an end. More than 2,000
            people have tested positive for Covid-19. What does the winter bring, some say that cases will continue to rise throughout the winter season.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
          <Avatar 
          src="https://unsplash.com/images/people"/>
          <Box ml={2}></Box>
          <Typography variant="subtitle2" component="p">
            Cheryl Morris
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
              October 14, 2020
            </Typography>
        </Box>
       <Box>
         {/* <BookmarkBorderIcon/> */}
       </Box>
      </CardActions>
    </Card>
          </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
