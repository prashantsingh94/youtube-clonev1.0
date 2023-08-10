import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail?.snippet);
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#333",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "200px",
              mb: 2,
              border: "1px solid #E3E3E3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.channelTitle}
            <CheckCircle
              sx={{
                fontSize: 15,
                color: "#333",
                ml: "5px",
              }}
            />
          </Typography>
        </CardContent>
      </Box>
    </Link>
  );
};

export default ChannelCard;
