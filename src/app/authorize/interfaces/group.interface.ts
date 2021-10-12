import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface IGroup {


  pager?: IPagination;
  data?: [{
    _id: string,
    name: string,
    description: string,
  }];

}
