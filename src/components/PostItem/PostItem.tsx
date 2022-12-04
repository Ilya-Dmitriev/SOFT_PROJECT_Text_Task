import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { postsAPI } from "../../servises/PostsServise";
import { IPost } from "../../models/IPost";
import { IUser, nullUser } from "../../models/IUser";

import classes from "./PostItem.module.scss";
import { PostComment } from "components/PostComment/PostComment";

interface PostItemProps {
  post: IPost;
  user: IUser | undefined;
}

export const PostItem: React.FC<PostItemProps> = ({
  post: { id, body, title },
  user: { name } = nullUser,
}) => {
  const { data: comments } = postsAPI.useFetchPostCommentsQuery(id);

  return (
    <li key={id} className={classes.post_item}>
      <div className={classes.content}>
        <div className={classes.head}>
          <div className={classes.name}>{name}</div>
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes.body}>{body}</div>
      </div>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Collapse.Panel
          header={<span>Comments</span>}
          key="1"
          className={classes.comments}
        >
          {comments?.map((comment) => (
            <PostComment
              key={comment.id}
              comment={comment}
              nestedComments={comments}
            />
          ))}
        </Collapse.Panel>
      </Collapse>
    </li>
  );
};
