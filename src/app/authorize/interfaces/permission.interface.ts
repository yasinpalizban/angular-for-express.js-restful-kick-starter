import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface IPermission {


  pager?: IPagination;
  data?: [{
    _id: string,
    name: string,
    active: number,
    description: string,
  }];

}
