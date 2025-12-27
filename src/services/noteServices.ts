import axios from "axios";
import type { FetchNoteResponse, NewNote } from "../types/note";



const BASE_URL = "https://notehub-public.goit.study/api/notes"

export async function fetchNotes(query: string, page: number): Promise<FetchNoteResponse> {
    const res = await axios.get<FetchNoteResponse>(`${BASE_URL}`, {
        params: {
            page,
            perPage: 12,
            ...(query && { search: query }),
        },
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
            "Content-Type": "application/json",
        }
    })
    return res.data
}

export async function createNote(userNote:NewNote): Promise<void> {
    await axios.post<void>(`${BASE_URL}`, userNote, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
            "Content-Type": "application/json",
        }
    })
}

export async function deleteNote(id:string):Promise<void> {
    await axios.delete<void>(`${BASE_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
            "Content-Type": "application/json",
        }
    })
    
}