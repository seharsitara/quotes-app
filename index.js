const search=document.getElementById('search');
const searchicon=document.getElementById('searchicon');
const para=document.getElementById('para');
const author=document.getElementById('author');
const favoriteicon=document.getElementById('favbtn');
const btn=document.getElementById('btn');
const nextbtn=document.getElementById('nextbtn');
const favoritelist=document.getElementById('favoritelist');
const searchHistory=document.getElementById('searchHistory');


const Quotes= [
      {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
      },
      {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
      },
      {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "Life is what happens.",
        author: "John Lennon"
      },
      { quote: "The only way to do great work is to love what you do.",
         author: "Steve Jobs" },
        { quote: "Life is what happens when you're busy making other plans.",
           author: "John Lennon" },
        { quote: "Get busy living or get busy dying.",
           author: "Stephen King" },
        { quote: "You miss 100% of the shots you don't take.", 
          author: "Wayne Gretzky" },
        { quote: "Whether you think you can or you think you can’t, you’re right.",
           author: "Henry Ford" }
    ];
    

  
   let currentQuote=null;
    let favorites=[];
   

  let currentIndex;
    let  searchValue;
    let quoteIndex=0;
   
    function showQuotes(){
     
     
      const randomIndex=Math.floor(Math.random()*Quotes.length);
    
       currentQuote=Quotes[randomIndex];
        para.innerHTML=`${quoteIndex+1}:  ${currentQuote.quote}`;
        author.innerHTML=`___${currentQuote.author} `;
        quoteIndex++;
        favoriteicon.classList.remove('checked');
       console.log(currentQuote);  

    }
    

  
 

  /* favoriteicon.addEventListener('click',(e)=>{
    {
    const isFavorite=   e.target.classList.contains('checked');
    }
   });*/
  

   
   favoriteicon.addEventListener('click', () => {
    console.log(currentQuote);
  if(currentQuote===null) return;
    const isFavorite = favoriteicon.classList.contains('checked');
    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter(fav => fav !== currentQuote);
      favoriteicon.classList.remove('checked');
    } else {
      // Add to favorites
      favorites.push(currentQuote);
     
      favoriteicon.classList.add('checked');
      
      favoritelist.hidden=true;
      
   }
  

  
  updateFavorites();
  

  
  });

  

  function updateFavorites() {
    
    favoritelist.innerHTML = '';
    favorites.forEach((fav ,index)=> {
     
      /*const listItem = document.createElement('li');
      const quoteDiv = document.createElement('div');
      quoteDiv.className = 'quote';
      listItem.innerHTML = `${index+1}:  ${fav.quote}     "__${fav.author}"`;
      favoritelist.appendChild(listItem);*/
      const listItem = document.createElement('li')
      
      const quoteDiv = document.createElement('div');
      quoteDiv.className = 'quote';
      quoteDiv.innerHTML = `${index+1}: ${fav.quote}`;
      listItem.appendChild(quoteDiv);
  
      // Create and style the author div
      const authorDiv = document.createElement('div');
      authorDiv.className = 'author';
      authorDiv.innerHTML = `— ${fav.author}`;
      listItem.appendChild(authorDiv);

     

      favoritelist.appendChild(listItem);


      console.log('hello');
    });
    const span=document.createElement('span');
      span.className='button';
      span.innerHTML='Back';
      favoritelist.appendChild(span);
     
  }
     
favoritelist.addEventListener('click',(el)=>{
  if(el.target.tagName==='SPAN'){
    el.target.style.display='none';
    [para, author, favoriteicon, nextbtn, search, searchicon, btn].forEach(el => {
      el.style.display='block';
    });
    favoritelist.style.display='none';

   
  }

})
     

  

btn.addEventListener('click',()=>{
  updateFavorites();
  [para, author, favoriteicon, nextbtn, search, searchicon, btn].forEach(el => {
    el.style.display = 'none';
  });
  favoritelist.style.display = 'block';
});
  
nextbtn.addEventListener('click',showQuotes);

    let Index=1;

    

    
let searchInput=[];
    function searchQuotes(){
      searchValue=search.value.trim().toLowerCase();
      if(!searchValue){

       para.innerHTML="please write author name"
        author.innerHTML="";
        favoriteicon.style.display="none";
        nextbtn.addEventListener('click',()=>{
          showQuotes();
          favoriteicon.style.display="block";
        })
        
        return;
      }

      
       searchInput=Quotes.filter(val=>val.author.toLowerCase().includes(searchValue));
      console.log(searchInput);
    
      searchInput.forEach((val,index)=>{
        const paragraph = document.createElement('p')
      
        const quotep = document.createElement('p');
        quotep.className = 'quote';
        quotep.innerHTML = `${index+1}: ${val.quote}`;
        paragraph.appendChild(quotep);
    
        // Create and style the author div
        const authorp = document.createElement('p');
        authorp.className = 'author';
        authorp.innerHTML = `— ${val.author}`;
        paragraph.appendChild(authorp);
  
       
       

  
        searchHistory.appendChild(paragraph);
  
        //para.innerHTML="no quote for this author";
       // author.innerHTML="";
       
        
      
      
      });
  
        
      const span=document.createElement('span');
      span.className='button';
      span.innerHTML='back';
      searchHistory.appendChild(span);

        para.style.display="none";
        author.style.display="none";
        favoriteicon.style.display="none";
        nextbtn.style.display="none";
        btn.style.display="none";
    }
  
      searchHistory.addEventListener('click',(el)=>{
       if(el.target.tagName==='SPAN'){
          el.target.style.display='none';
         [para, author, favoriteicon, nextbtn,search, searchicon ,btn].forEach(el => {
            el.style.display='block';
         });
         searchHistory.style.display='none';
         search.value="";
          
        }
        
      });
   
      searchicon.addEventListener('click',()=>{
        searchQuotes();
        
      });
    
    /*function showDisplay(){
      if(searchInput.length>0){
       


      currentQuote=searchInput[currentIndex];
      para.innerHTML=`${currentQuote.quote}`;
      author.innerHTML=`${currentQuote.author}`;
    

    
   
  }

}
function shownNextDisplay(){
          if(currentIndex<searchInput.length-1){
            currentIndex++;
            showDisplay();
          }
         
        
    }

    
    nextbtn.addEventListener('click',shownNextDisplay);
      //  function showSearchQuotes(){
     
        /*   if(searchInput.length>0 && currentIndex <  searchInput.length-1 ){
               currentQuote=searchInput[currentIndex];
                para.innerHTML=`${currentQuote.quote}`;
                author.innerHTML=`${currentQuote.author}`;
                currentIndex++;
           }
            else{
              para.innerHTML="no more quotes";
            }
  
     }*/
  
    

    
    
/*function searchQuotes(){
  
  searchValue=search.value.trim().toLowerCase();
 if(!searchValue){
  
   showQuotes();
    return;
 }

 const searchInput=Quotes.filter((val,index)=>val.author.toLowerCase().includes(searchValue));
 if(searchInput.length>0){
   

   if(searchInput.length>0 && currentIndex< searchInput.length ){
  
    para.innerHTML="";
    author.innerHTML="";
  
                               
          currentQuote=searchInput[currentIndex];
          
          para.innerHTML += `${Index}: ${currentQuote.quote}<br>`;
          author.innerHTML += `___${currentQuote.author}<br>`;
          currentIndex++;
          Index++;
  
      }
   else {
      para.innerHTML = "Found no more quotes for this author.";
      author.innerHTML = "";
   }
  
   }
  
    

else{
  para.innerHTML="found no quotes for this author."
  author.innerHTML="";
}
}*/






   
 



    
           
showQuotes();
