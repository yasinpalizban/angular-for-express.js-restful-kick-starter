import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface IUserPermission {

  pager?: IPagination;
  data?: [{
    _id: string,
    permissionId: string,
    userId: string,
    actions: string,
    permission: string,
    userName: string,
    firstName: string,
    lastName: string,
  }];

}
