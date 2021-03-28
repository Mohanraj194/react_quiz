import React from 'react';
import category from '../quizCategeory/Category.json'
const Start = ({ onQuizStart }) => {
  return(

    <div>
      <div>
      <h1>Quiz</h1><br/>
      <h4>Select Your Category</h4>
    </div>
    <div className="cat">
      
      {
      category.data.map(cat=>(
        <div className="card" key={cat.id}>
          <div className="card-content">
            <div className="content">
                <h1>{cat.catName}</h1>
                
               <button className="button is-info is-medium" onClick={()=>{onQuizStart(cat.id)}}>Start</button>
           </div> 
        
         </div>
        </div>
      ))
    }
    </div>
    </div>
    
  );
}

export default Start;
