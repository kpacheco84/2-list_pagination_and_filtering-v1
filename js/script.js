/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



const list = document.querySelectorAll('.student-details');

const studentList = document.querySelector('ul');

let page = 1;


const showPage = ( list, page ) => {
        let studentsTo= (page * 10) ; 
        let studentsFrom = studentsTo - 10;
        list = list.length;

// hide all students first
for (let i = 0; i < list; i++) {

  document.getElementsByTagName("li")[i].style.display = "none";

  // show students based on page number
  
    for (let i = studentsFrom ; i < studentsTo ; i++) {
  
      document.getElementsByTagName("li")[i].style.display = "";
      
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

   //loop to add the needed page numbers to the page

     for (i=1;i<=pageNum;i +=1){
      pages += 1;
        
        const li = document.createElement('li');
        ul.appendChild(li);
        const a = document.createElement("a");
        a.textContent = pages;
        li.appendChild(a);
        a.href = '#';
        //set 1st page to active on load
        let initialPage = document.querySelector('a').className = 'active';
    
        // add event listener to pass pagenumber to ShowPage and remove active class
        a.addEventListener('click', (e) => {
          selectedLink = e.target.textContent;
          let links = document.querySelector('.active').className = '';
          passlist = document.querySelectorAll('.student-details');
          page = selectedLink;
                  showPage(passlist, page);
                  console.log(passlist, page);
         //set active class for currently clicked link
                  e.target.className = 'active';
        });
      }
   
    }  
        
 // Call function for Initial Load
showPage(list,page); 
appendPageLinks (list.length);
   



