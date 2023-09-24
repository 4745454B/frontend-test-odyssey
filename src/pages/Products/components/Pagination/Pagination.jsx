import classes from './Pagination.module.scss'

export default function Pagination({ itemsPerPage, totalItems, currentPage, setPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // Maximum number of page numbers to show

  const generatePageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= maxVisiblePages) {
      // If there are fewer pages than maxVisiblePages, display all pages.
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Determine the range of page numbers to display.
      const middle = Math.floor(maxVisiblePages / 2);
      let startPage = currentPage - middle;
      let endPage = currentPage + middle;

      if (startPage < 1) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxVisiblePages + 1;
      }

      // Add page numbers and ellipsis.
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const handleSetPage = (page) => {
    if (page === '...') return;
    setPage(page);
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav>
      <ul>
        {pageNumbers.map((number, index) => (
          <li key={index}>
            <button
              onClick={() => { handleSetPage(number); }}
              className={number == currentPage ? classes.active : null }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
