import React from "react";

const Search = ({ search, setSearch }) => {
	return (
        <div className="container">
		<div className="col-4 mb-4  offset-9" >
			<form onSubmit={(e) => e.preventDefault()}>
			
				<input
					className="form-control"
					type="search"
					role="searchbox"
					placeholder="Search Name here..."
					value={search}
                    
					onChange={(e) =>
						setSearch(e.target.value)
					} />
			</form>
             
		</div>
        </div>


	);
    
};

export default Search;