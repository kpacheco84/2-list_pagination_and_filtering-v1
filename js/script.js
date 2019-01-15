/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



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

   //loop for each page number

     for (i=1;i<=pageNum;i +=1){

        pages += 1;
        const li = document.createElement('li');
        ul.appendChild(li);
        const a = document.createElement("a");
        a.textContent = pages;
        li.appendChild(a);
        a.href = '#';
    /* let initialPage = document.getElementsByTagName('a')[0];
     initialPage.className = 'active';
     console.log(initialPage);
     */
        // add event listener to pass pagenumber to ShowPage
        a.addEventListener('click', (e) => {
          selectedLink = e.target.textContent;
      
          removeClass(pageNum);
          e.target.className = 'active';
          passlist = document.querySelectorAll('.student-details');
          page = selectedLink;
                  showPage(passlist, page);
                  console.log(passlist, page);
         
         
        
        });//Loop over pagination links to remove active class from all links

        function removeClass(pageNum){
        for (var i = 1; i < pageNum; i++) {
          var current = document.getElementsByTagName('a');
          current[i].className = current[0].className.replace(" active", "");
                          }
                        };
        //document.getElementsByTagName('a')[0].className= 'active';
      }
    

/*
        a.addEventListener('click', list => { 

            let pageNum = (Math.ceil(list / 10));
           let  page = a.textContent;
          
          function removeClass(pageNum){
            for (var i = 1; i < pageNum; i++) {
                var current = document.getElementsByTagName('a');
                current[i].className = current[0].className.replace(" active", "");
                event.target.className = 'active';
                      }
                    };
          removeClass(pageNum);
          showPage(list,page);
          console.log(pageNum,list,page);
           
                  })
                  
                 */
                }  
        
 


   

  

   showPage(list,page); 

   appendPageLinks (list.length);
   



// Remember to delete the comments that came with this file, and replace them with your own code comments.