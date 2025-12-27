import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import { fetchNotes } from "../../services/noteService";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "../SearchBox/SearchBox";
import Modal from "../Modal/Modal";
import { Toaster } from "react-hot-toast";


function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModal, setIsModal] = useState(false);

  const isOpenModal = () => setIsModal(true);
  const isCloseModal = () => setIsModal(false);

  const { data } = useQuery({
    queryKey: ["notes", query, page],
    queryFn: () => fetchNotes(query, page),
    placeholderData: keepPreviousData,
  });

  console.log(query);
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox
            setQuery={(value) => {
              setQuery(value);
              setPage(1);
            }}
          />
          {data && data?.totalPages > 1 && <Pagination totalPages={data.totalPages} page={page} setPage={setPage} />}
          <button onClick={isOpenModal} className={css.button}>
            Create note +
          </button>
        </header>
        {data && <NoteList data={data?.notes} />}
      </div>
      {isModal && <Modal closeModal={isCloseModal} />}
      <Toaster />
    </>
  );
}

export default App;
