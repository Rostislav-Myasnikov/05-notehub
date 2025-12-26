import { useDebouncedCallback } from "use-debounce";
import type { SearchBoxProp } from "../types/note";

export default function SearchBox({ setQuery }: SearchBoxProp) {
  const updateQuery = useDebouncedCallback(
    (value: string) => {
      setQuery(value);
    },
    300
  );

  return (
    <input
      type="text"
      onChange={(e) => updateQuery(e.target.value)}
      placeholder="Search notes..."
    />
  );
}
