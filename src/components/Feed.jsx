import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
        title="Amila Jones"
        subheader="October 15, 2019"
      />
      <Post
        src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400"
        subheader="June 15, 2022"
        title="Thor"
      />

      <Post
        src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="May 15, 2023"
        title="Natasha"
      />
      <Post
        src="https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="April 3, 2019"
        title="Wanda"
      />
      <Post
        src="https://images.pexels.com/photos/13069698/pexels-photo-13069698.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="March 15, 2022"
        title="Bruce Banner"
      />
      <Post
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="December 15, 2021"
        title="Tony Stark"
      />
      <Post
        src="https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="November 24, 2019"
        title="Chris Evans"
      />
      <Post
        src="https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=300"
        subheader="July 7, 2023"
        title="Maya Green"
      />
    </Box>
  );
};

export default Feed;
