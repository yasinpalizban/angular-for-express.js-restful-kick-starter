import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface IGroupPermission {


  pager?: IPagination;
  data?: [{
    _id: string,
    permissionId: string,
    groupId: number,
    actions: string,
    permission: string,
    group: string,
  }];

}
