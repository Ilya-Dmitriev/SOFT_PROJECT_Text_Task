import { IAlbum } from "../../models/IAlbum";
import { IUser, nullUser } from "../../models/IUser";
import React, { Ref } from "react";
import { Button, Carousel, Image, Typography } from "antd";
import { albumsAPI } from "../../servises/AlbomsServise";
import { CarouselRef } from "antd/lib/carousel";

import classes from "./AlbumItem.module.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface AlbumItemProps {
  album: IAlbum;
  user: IUser | undefined;
}

export const AlbumItem: React.FC<AlbumItemProps> = ({
  album,
  user = nullUser,
}) => {
  const { data: photos } = albumsAPI.useFetchAlbomPhotosQuery(album.id);
  const carouselRef: Ref<CarouselRef> = React.createRef();

  return (
    <div className={classes.album_item}>
      <div className={classes.album_head}>
        <div className={classes.content}>
          <div className={classes.album_title}>{album.title}</div>
          <div className={classes.user}>
            <div className={classes.user_name}>{user.name}</div>
            <div className={classes.user_email}>{user.email}</div>
          </div>
        </div>
      </div>
      <Image.PreviewGroup>
        <Carousel ref={carouselRef} infinite={false} dots={false}>
          {photos &&
            photos.map((photo, index) => (
              <div key={photo.id}>
                <div className={classes.carousel}>
                  <div className={classes.content}>
                    <div className={classes.content_header}>Message:</div>
                    <div className={classes.photo_title}>{photo.title}</div>
                  </div>
                  <div className={classes.img_container}>
                    <div className={classes.img_wrap}>
                      <Image width={200} height={200} src={photo.url} />
                      <Button
                        type="primary"
                        disabled={index === 0}
                        className={classes.back_btn}
                        shape="circle"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => {
                          carouselRef.current?.prev();
                        }}
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        disabled={index === photos.length - 1}
                        icon={<ArrowRightOutlined />}
                        className={classes.next_btn}
                        onClick={() => {
                          carouselRef.current?.next();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
};
