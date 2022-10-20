import { usePagination } from "../../pages/homepage/paginationObserver";

const prevButtonClass: string = "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    nextButtonClass: string = "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800";

const Pagination = () => {
    const { state: {pageNum, totalPages = 1}, actions } = usePagination();

    return (<div>
        {pageNum > 1 ? <button onClick={actions.decrementPageNum} type="button" className={prevButtonClass}>Previous</button> : null}
        Page { pageNum }
        {pageNum < totalPages ? <button onClick={actions.incrementPageNum} type="button" className={nextButtonClass}>Next</button> : null}
      </div>);
};

export default Pagination;