export interface Note {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tag: string
    
}

export interface FetchNoteResponse {
    notes: Note[],
    totalPages: number
}

export interface UserNote {
    title: string,
    content: string,
    type: string
}

export interface NoteListPros {
    data: Note[]
}


export interface PaginationProp {
    res:FetchNoteResponse,
    page: number
    setPage: (page: number) => void;
}


export interface SearchBoxProp {

    setQuery: (value: string) => void

}

export interface NewNote {
    title: string,
    content: string,
    tag: string
}