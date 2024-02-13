import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  function removeSpecialCharacters(str) {
    // Use a regular expression to remove special characters
    return str.replace(/[^\w\s]/gi, '');
  }
  
  function truncateString(query, maxLength) {
    // Remove special characters
    const stringWithoutSpecialChars = removeSpecialCharacters(query);
  
    // Truncate the string
    const truncatedString = stringWithoutSpecialChars.substring(0, maxLength);
  
    return truncatedString;
  }
  
  const originalString = query;
  const maxLength = 20;
  
  const truncatedString = truncateString(originalString, maxLength);

  function handleSubmit(e) {
    e.preventDefault();
    if (!truncatedString) return;
    navigate(`/order/${truncatedString}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order"
        value={truncatedString}
        onChange={(e) => setQuery(e.target.value)}
        className="sm:2-64 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400
        sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64"
      ></input>
    </form>
  );
}

export default SearchOrder;
