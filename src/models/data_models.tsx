export type formProtoPersonalData = {
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  newsletter: boolean;
};

export type formLoginDataProto = {
  username: string;
  password: string;
};

export type formAccessDataProto = {
  repeatPassword: string;
  accountType: string;
};

export type formAccessProto = formLoginDataProto & formAccessDataProto;
