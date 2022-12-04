export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const nullUser: IUser = {
  id: NaN,
  name: "Not found",
  username: "Not found",
  email: "Not found",
  address: {
    street: "Not found",
    suite: "Not found",
    city: "Not found",
    zipcode: "Not found",
    geo: {
      lat: NaN,
      lng: NaN,
    },
  },
  phone: "Not found",
  website: "Not found",
  company: {
    name: "Not found",
    catchPhrase: "Not found",
    bs: "Not found",
  },
};
