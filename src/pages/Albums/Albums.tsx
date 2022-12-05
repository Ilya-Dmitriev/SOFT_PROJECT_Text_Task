import { useState } from "react";
import { List, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { albumsAPI } from "../../servises/AlbomsServise";
import { usersAPI } from "../../servises/UsersServise";

import classes from "./Albums.module.scss";
import { AlbumItem } from "components";

const Albums = () => {
  const [limit, setLimit] = useState(10);
  const { data: albums } = albumsAPI.useFetchLimitPageAlbomsQuery({
    limit,
    page: 1,
  });

  const usersId = albums?.reduce(
    (reduser: number[], album) =>
      reduser.includes(album.userId) ? reduser : [...reduser, album.userId],
    [],
  );
  const { data: users } = usersAPI.useFetchUserdByIdQuery(usersId);

  return (
    <div className={classes.albums_container}>
      {albums && (
        <InfiniteScroll
          dataLength={albums.length}
          next={() => {
            setLimit((prev) => prev + 10);
          }}
          hasMore={true}
          loader={null}
        >
          <List
            size="large"
            dataSource={albums}
            renderItem={(album) => (
              <AlbumItem
                album={album}
                key={album.id}
                user={users?.find((user) => user.id === album.userId)}
              />
            )}
          />
        </InfiniteScroll>
      )}
      <Typography.Title level={4} className={classes.footer}>
        End of Albums
      </Typography.Title>
    </div>
  );
};

export default Albums;
