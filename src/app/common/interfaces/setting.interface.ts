import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface ISetting {

  pager?: IPagination;
  data?: [{
    _id: string,
    key: string,
    value: string,
    description: string,
    status: boolean,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
  }];

}
