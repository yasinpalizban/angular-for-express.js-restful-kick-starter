export interface IAuth {
  csrf?: string;
  success?: boolean;
  jwt?: {
    token: string,
    expire: number
  };
  role?: {
    name: string,
    _id: string
  };
  permissions?: [{
    _id: string,
    name: string,
    description: string,
    active: number
  }],
  permissionGroup?: [{
    _id: string,
    groupId: string,
    permissionId: string,
    actions: string,
    permission: string
  }];
  permissionUser?: [{
    _id: string
    userId: string,
    permissionsId: string,
    actions: string,
    permission: string,
  }];
  userInformation?: {
    _id: string,
    userName: string,
    firstName: string,
    lastName: string,
    image: string,
    email: string,
    phone: string,
  }
}
