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
// correctly displays student const studentDetailUL =document.getElementsByTagName("li")[2].innerHTML;

//document.getElementsByTagName("li").style.display = "none";
const studentList = document.querySelector('ul');
//studentList.style.visibility = "hidden";
console.log(studentList);
let studentsFrom= 0;
let studentsTo= 9;

//IDEA TO REMOVE STUDENTS
/*
const removeStudentsFromPage = () => {

   while (studentList.firstElementChild) {
 
     studentList.removeChild(studentList.firstElementChild);
 
   }
 
 }
 removeStudentsFromPage();
*/
const studentsHide = (list)=>{
for (i=0;i <=list;i+=1 ){
  document.getElementsByTagName("li")[i].style.display = "none";
  //studentList.removeChild(studentList[i]);
    }
}
studentsHide(list);




const showPage = ( list, page ) => {
   
   
  for (i=studentsFrom;i <=studentsTo;i+=1 ){
   

    studentsFrom = studentsTo + 1;
    studentsTo =(page * 10)-1;
    const studentDetailUL =document.getElementsByTagName("li")[i].innerHTML;
    const li = document.createElement('li');
  
  
 
  console.log(studentList); 
  
  li.innerHTML = studentDetailUL;
   
  studentList.appendChild(li);
   // looping detail perfect 
   console.log(studentDetailUL); 
  }
       
}  
showPage(list,1);    
       /*
   Loop over items in the list parameter
   -- If the index of a list item is >= the index of the first
   item that should be shown on the page
   -- && the list item index is <= the index of the last item
   that should be shown on the page, show it

  }

  
     */
   
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = ( list ) => {
  
     
      const pageNum = (Math.ceil(list / 10));
     
      
     
      const ul = document.createElement('ul');
     
      const paginationDiv = document.createElement('paginationdiv');
     
      paginationDiv.className = 'pagination';
     
      const pageDiv = document.querySelector('.page');
     
      pageDiv.appendChild(paginationDiv);
      let pages = 0;
      paginationDiv.appendChild(ul);
      //loop for each page number
     for (i=1;i<=pageNum;i +=1){
        pages += 1;
      
        const li = document.createElement('li');
     
        ul.appendChild(li);
        li.textContent = pages;

        // console.log(pages);
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
 
   appendPageLinks (list);
 

// Remember to delete the comments that came with this file, and replace them with your own code comments.