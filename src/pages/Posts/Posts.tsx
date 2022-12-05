import { useState } from "react";
import { List, Typography } from "antd";
import { usersAPI } from "../../servises/UsersServise";
import { postsAPI } from "../../servises/PostsServise";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostItem } from "components";

import classes from "./Posts.module.scss";

const Posts = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts } = postsAPI.useFetchLimitPagePostsQuery({
    limit,
    page: 1,
  });

  const usersId = posts?.reduce(
    (reduser: number[], post) =>
      reduser.includes(post.userId) ? reduser : [...reduser, post.userId],
    [],
  );
  const { data: users } = usersAPI.useFetchUserdByIdQuery(usersId);

  return (
    <div className={classes.posts_container}>
      {posts && (
        <InfiniteScroll
          dataLength={posts.length}
          next={() => {
            setLimit((prev) => prev + 10);
          }}
          hasMore={true}
          loader={null}
        >
          <List
            size="large"
            dataSource={posts}
            renderItem={(post) => (
              <PostItem
                key={post.id}
                post={post}
                user={users?.find((user) => user.id === post.userId)}
              />
            )}
          />
        </InfiniteScroll>
      )}
      <Typography.Title level={4} className={classes.footer}>
        End of Posts
      </Typography.Title>
    </div>
  );
};

export default Posts;
