import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import type { FetchNoteResponse } from "../../types/note";

 interface PaginationProp {
    res:FetchNoteResponse,
    page: number
    setPage: (page: number) => void;
}

export default function Pagination({ res, page, setPage  }: PaginationProp) {
  return (
    <>
      {res.totalPages > 1 && (
        <ReactPaginate
          pageCount={res.totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </>
  );
}
