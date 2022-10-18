type Props = {
    pageNum: number
};

//TODO: 
//buttonHandler: pageNum alter must trigger getProducts
//buttonHandler: consider page limits - dont alter pageNum for first and last page scenario
//styling

const Pagination = ({ pageNum }: Props) => {
    const prevButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        pageNum--;
    };

    const nextButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        pageNum++;
    };

    return (<div>
        <button onClick={prevButtonHandler} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Previous</button>
        You are on page {pageNum}
        <button onClick={nextButtonHandler} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Next</button>
      </div>);

};

export default Pagination;