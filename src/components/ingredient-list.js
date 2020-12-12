import React from 'react'

const IngredientList = ({list, title, cssClass}) => {
  
    return (
            (list == null) ? <></> :
            <>
                <h3 className='sidebar-title'>{title}</h3>
                <ul className={`list-unstyled sidebar-list ${cssClass}`}>
                    {list.map(item => (
                        <li key={item.ingredient}>
                            {item.ingredient}
                            {item.note ? <small className="d-block"><em>{item.note}</em></small> : ''}
                        </li>
                    ))}
                </ul>
            </>
    )
    
  }
  
  export default IngredientList
  