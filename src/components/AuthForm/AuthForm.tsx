import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import classes from "./AuthForm.module.scss";
import { IAuthParams } from "models/IAuthParams";

interface AuthFormProps {
  onFinish: (authParams: IAuthParams) => void;
  isLoading: boolean;
  error: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  onFinish,
  isLoading,
  error,
}) => {
  return (
    <Form
      name="auth"
      className={classes.auth_form}
      fields={[
        { name: "login", value: "admin" },
        { name: "password", value: "admin" },
      ]}
      onFinish={onFinish}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: "Login is required" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Login" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.submit}
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>

      {error && (
        <Form.Item>
          <Typography.Text type="danger">{error}</Typography.Text>
        </Form.Item>
      )}
    </Form>
  );
};
