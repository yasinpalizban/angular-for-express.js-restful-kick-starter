import {IPagination} from "../../shared/interfaces/pagination.interface";

export interface IUser {


  pager?: IPagination;
  data?: [{
    _id: string,
    email: string,
    userName: string,
    status_message: string,
    status: boolean,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    firstName: string,
    lastName: string,
    image: string,
    gender: number,
    birthday: string,
    country: string,
    city: string,
    address: string,
    phone: string,
    group: string,
  }];

}
