// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
export class Picture {
  fid: number;
  uid: number;
  filename: string;
  uri: string;
  filemime: string;
  filesize: number;
  status: number;
  timestamp: number;
  url: string;
}

export class User {
  uid: number;
  name: string;
  mail: string;
  created: number;
  access: number;
  login: number;
  status: number;
  timezone: string;
  language: string;
  picture: Picture;
  init: string;
  roles: {
    [key: number]: string;
  };
  field_skills: any;
}

export class UserAuth {
  sessid: string;
  session_name: string;
  token: string;
  user: User;
}
