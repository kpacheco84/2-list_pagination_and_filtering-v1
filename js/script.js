/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const list = document.querySelectorAll('.student-details').length;

const studentList = document.querySelector('ul');

let page = 1;


const showPage = ( list, page ) => {
   


let studentsTo= (page * 10); //30
let studentsFrom = studentsTo - 10;//20

// if studentTo = 10 then show all 10
if (studentsTo <= 10){
  for (let i = 10; i < list; i++) {

    document.getElementsByTagName("li")[i].style.display = "none";
    
            }
          }
          //if studentsTo >10 hide all between 0 and stdents from and everyone after students to
            else  {
              if(studentsTo > 10){
                     for (let i = 0; i < studentsFrom; i++) {
            
                document.getElementsByTagName("li")[i].style.display = "none";
                
                        }
                        for (let i = studentsTo; i < list; i++) {
            
                          document.getElementsByTagName("li")[i].style.display = "none";
                         
                                  }

            }
      }
    }
  

 
       


const appendPageLinks = ( list ) => {
  
     
      const pageNum = (Math.ceil(list / 10));
     
      
     
      const ul = document.createElement('ul');
     
      const div = document.createElement('div');
     
     div.className = 'pagination';
     
      const pageDiv = document.querySelector('.page');
     
      pageDiv.appendChild(div);
      let pages = 0;
      div.appendChild(ul);
      //loop for each page number
     for (i=1;i<=pageNum;i +=1){
        pages += 1;
      
        const li = document.createElement('li');
     
        ul.appendChild(li);
       
    
       
        const a = document.createElement("a");
        a.textContent = pages;
        li.appendChild(a);

        
       
        // add event listener
        a.addEventListener("click", myFunction);
       
       
        function myFunction(page) {
         
       
      
        page = (a.textContent);
        event.target.className = 'active';
        showPage(list,page);
         removeClass(a);
          
        } 
        

}


  /* (DONE)1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page 
   2. (DONE)Create a div , give it the “pagination” class, and append it to the .page div
   3. (DONE)Add a ul to the “pagination” div to store the pagination links
   4. for every page, add li and a tags with the page number text
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */
   }
   //Loop over pagination links to remove active class from all links
const removeClass =(a)=> {

for (var i = 0; i < 6; i++) {
  
    var current = document.getElementsByTagName('a');
    current[i].className = current[0].className.replace(" active", "");
    event.target.className = 'active';
    console.log(current);
  };

}

// i know i need this but dont know where to put it
/*let initialPage = document.getElementsByTagName('a')[page]
        initialPage.className = 'active';
*/
   appendPageLinks (list);
 
   showPage(list,page); 

// Remember to delete the comments that came with this file, and replace them with your own code comments.