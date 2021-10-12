export interface IPagination {

  totalDocs: number;
  limit: number;
  page: number;
  nextPage: number | null | undefined;
  prevPage: number | null | undefined;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  pagingCounter: number;
  meta: any;
}
