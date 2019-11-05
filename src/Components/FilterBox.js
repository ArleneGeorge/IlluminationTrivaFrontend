import React from 'react'


function FilterBox(props){
        return (
            <section className='search'>
            <form>
                <input type='text' className="search-bar" 
                placeholder="Easy, Medium, Hard, Entertainment, Sport, History, Politics" 
                value={props.searchTerm}
                onChange={props.updateSearchTerm}
              />
            </form>
          </section>
  
        )
}

export default FilterBox