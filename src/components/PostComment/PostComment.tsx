import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { IComment } from "models/IComment";

import classes from "./PostComment.module.scss";

interface PostCommentProps {
  comment: IComment;
  nestedComments?: IComment[];
}

export const PostComment: React.FC<PostCommentProps> = ({
  comment: { name, body, email },
  nestedComments,
}) => {
  return (
    <div className={classes.comment}>
      <div className={classes.content}>
        <div className={classes.head}>
          <div className={classes.email}>{email}</div>
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.body}>{body}</div>
      </div>
      {nestedComments && (
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
            {nestedComments.map((comment) => (
              <PostComment key={comment.id} comment={comment} />
            ))}
          </Collapse.Panel>
        </Collapse>
      )}
    </div>
  );
};
