import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup,Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 15
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
}));

export default function ShoppingCartItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        title="Live from space album cover"
      />
      
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/random"
          title="Live from space album cover"
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Category
        </Typography>
        <Typography variant="div" component="h2">
          Item Name{" "}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Size
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              M
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              1
            </Typography>
          </Grid>
          <Grid item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="h6" component="div" color="secondary">
              €105.99
            </Typography>
          </Grid>
        </Grid>
        <hr/>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => { alert('clicked')}}>Remove Me</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}