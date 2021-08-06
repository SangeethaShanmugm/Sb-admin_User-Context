import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import { Create } from "@material-ui/icons";
import { useGlobalContext } from "./userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ProfileCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const history = useHistory();

  const { profileuserData } = useGlobalContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const editProfile = (id) => {
  //   history.push(`/ProfileEdit/${id}`);
  // };

  function editProfile(id) {
    history.push(`/ProfileEdit/${id}`);
  }

  return (
    <>
      <div
        style={{
          margin: `50px`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`
        }}
        className="e-card e-card-horizontal"
      >
        <Card className={classes.root}>
          <Paper variant="outlined" />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                P
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={profileuserData.name}
            subheader="September 14, 2016"
          />
          <CardMedia className={classes.media} image={profileuserData.photo} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Please click arrow down to see more details
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={() => editProfile(profileuserData.id)}
            >
              <Create />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography color="primary" paragraph>
                Personal Info:
              </Typography>
              <Typography paragraph>
                Email ID:{profileuserData.email}
                <br />
                Mobile Number:{profileuserData.mobile}
              </Typography>
              <Typography color="primary" paragraph>
                About
              </Typography>
              <Typography paragraph>{profileuserData.about}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      );
    </>
  );
}
//
