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
const list = document.querySelectorAll('.student-details');

const studentList = document.querySelector('ul');

let page = 1;


const showPage = ( list, page ) => {
   


let studentsTo= (page * 10) ; //60
let studentsFrom = studentsTo - 10;//50
list = list.length;

// hide all students first
for (let i = 0; i < list; i++) {

  document.getElementsByTagName("li")[i].style.display = "none";

  // show students based on page number
  //if (studentsTo = 10){
  
   
    for (let i = studentsFrom ; i < studentsTo ; i++) {
  
      document.getElementsByTagName("li")[i].style.display = "block";
      
              }
            }
            //if studentsTo >10 
              /*else  {
                if(studentsTo > 10){
                       for (let i = studentsTo - 1; i < studentsFrom - 1; i++) {
              
                  document.getElementsByTagName("li")[i].style.display = "block";
                  console.log(i);
                          }
                       }
                  }
            }*/
      
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

        a.href = '#';
       
        // add event listener
        
        a.addEventListener('click', pageNum => { 
          page= (a.textContent);
          pageNum = (Math.ceil(list / 10));
           removeClass(pageNum);
           console.log(page);
          
        }
        
        
        
        
        )

        /*a.addEventListener("click", myFunction);
       
       
        function myFunction(page) {
         
       page = (a.textContent);
       removeClass(pageNum);
        
         */
                  } 
      

          }

   
   //Loop over pagination links to remove active class from all links
function removeClass (pageNum) {

for (var i = 1; i < pageNum; i++) {
  
    var current = document.getElementsByTagName('a');
    current[i].className = current[0].className.replace(" active", "");
    
    
    
    
  };
  
  showPage(list,page); 
  event.target.className = 'active';
}



   
 
   showPage(list,page); 
   appendPageLinks (list.length);
  


// Remember to delete the comments that came with this file, and replace them with your own code comments.