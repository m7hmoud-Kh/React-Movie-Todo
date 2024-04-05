const Pagination = ({totalPagesNumber,pageNumber,jumpTo,decrement,increment}) => {
    return ( <nav aria-label="Page navigation example" className="nav-pag">
    <ul class="pagination">
        <li className="page-item"><button className="page-link" onClick={() => decrement()}>Previous</button>
        </li>
        {
            totalPagesNumber.filter((num) => num >= pageNumber && num < pageNumber+10).map((number) => {
                if(number === pageNumber){
                    return  <li className={`page-item active`}><button className="page-link" onClick={() => jumpTo(number)}>{number}</button></li>
                }else{
                    return  <li className={`page-item`}><button className="page-link" onClick={() => jumpTo(number)}>{number}</button></li>
                }

            })
        }
        <li className="page-item"><button className="page-link" onClick={() => increment()}>Next</button></li>
    </ul>
    </nav>);
}

export default Pagination;