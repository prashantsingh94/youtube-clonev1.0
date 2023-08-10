import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  //console.log(snippet.thumbnails.high.url);
  return (
    <Card sx={{ width: { md: "320px", sx: "100%" } }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
        <CardContent
          sx={{
            backgroundColor: "#EDEDED",
            height: "115px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#333">
            {snippet?.title.substring(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="#333">
              {snippet?.channelTitle.substring(0, 60) ||
                demoVideoTitle.slice(0, 60)}
              <CheckCircle
                sx={{
                  fontSize: 15,
                  color: "#333",
                  ml: "5px",
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
