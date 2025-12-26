import css from "./App.module.css"
import NoteList from "../NoteList/NoteList"
import {fetchNotes} from "../services/noteServices"
import Pagination from "../Pagination/Pagination"
import { useState } from "react"
import { useQuery,keepPreviousData } from "@tanstack/react-query"
import SearchBox from "../SearchBox/SearchBox"

function App() {

  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  const  { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['notes', query, page],
    queryFn: () => fetchNotes(query, page),
    placeholderData: keepPreviousData,
  })

console.log(query)
  return (
    <>
     <div className={css.app}>
	<header className={css.toolbar}>
		<SearchBox setQuery={setQuery}/>
		{data && <Pagination res={data} page={page} setPage={setPage}/>}
		<button className={css.button}>Create note +</button>
  </header>
{ data && <NoteList data={data?.notes}/>
}</div>

    </>
  )
}

export default App
