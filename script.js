/* eslint-disable indent */

const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");

let mode = -1;

const display = document.querySelector("#display");
const bookName = document.querySelector("#name");
const bookAuthor = document.querySelector("#author");
const readStatus = document.querySelector("#status");
const yourRating = document.querySelector("#rating");
const yourReview = document.querySelector("#review");
let count = 0;
let myLibrary = [];

clearBtn.addEventListener("click", clear);
submitBtn.addEventListener("click", addBookToLibrary);


function afterDelete( event,  index) {
    if(confirm("Do you want to delete " + myLibrary[index].name))
    {
        --count;
        myLibrary.splice(index, 1);
        displayBook();
    }
}

function edit(event, index) {
    bookName.value = myLibrary[index].name;
    bookAuthor.value = myLibrary[index].author;
    readStatus.value = myLibrary[index].status;
    yourRating.value = myLibrary[index].rating;
    yourReview.value = myLibrary[index].review;

    submitBtn.textContent = "Edit";
    mode = index;
}

function addBookToLibrary() {
    
    let book = {};
    if(mode != -1)
    {
       myLibrary[mode].name = `${bookName.value}`;
       myLibrary[mode].author = `${bookAuthor.value}`;
       myLibrary[mode].status = `${readStatus.value}`;
       myLibrary[mode].rating = `${yourRating.value}`;
       myLibrary[mode].review = `${yourReview.value}`;
    }
    else 
    {
       
        book["name"] = bookName.value;
        book["author"] = `${bookAuthor.value}`;
        book["status"] = `${readStatus.value}`;
        book["rating"] = `${yourRating.value}`;
        book["review"] = `${yourReview.value}`;
    }

    if(bookName.value == "" || bookAuthor.value == "" || yourRating.value > 10 || yourRating.value < 0)
    {
        alert("Please fill in the required and valid rating.");
    }
    else if(mode != -1)
    {
        displayBook();
        mode = -1;
        submitBtn.textContent = "Submit";
    }
    else
    {  
        ++count;
        myLibrary.push(book);
        displayBook();
    }
}

function clear() {
    bookName.value = "";
    bookAuthor.value = "";
    yourRating.value = "0";
    yourReview.value = "";
}

function removeLibrary() {
   let divs = display.getElementsByClassName("box");
   while (divs[0]) {
    divs[0].parentNode.removeChild(divs[0]);
}

}

function displayBook() {
  
    

        removeLibrary();
        for(let i = 0; i < count; ++i)
        {
            
            const div = document.createElement("div");

            const editBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");
            // eslint-disable-next-line quotes
            editBtn.innerHTML = '<img src="edit.png" width="24" height="24">';
            // eslint-disable-next-line quotes
            deleteBtn.innerHTML = '<img src="delete.png">';
            editBtn.classList.add("edit");
            deleteBtn.classList.add("delete");
           
            deleteBtn.addEventListener("click", function(e) {
                afterDelete(e, i);
            });

            editBtn.addEventListener("click", function(e) {
                edit(e, i);
            });

            const pID = document.createElement("p");
            const pName = document.createElement("p");
            const pAuthor = document.createElement("p");
            const pStatus = document.createElement("p");
            const pRating = document.createElement("p");
            const pReview = document.createElement("p");
            const hr = document.createElement("hr");

            pID.textContent = i + 1;
            pName.textContent = myLibrary[i].name;
            pAuthor.textContent = myLibrary[i].author;
            pStatus.textContent = myLibrary[i].status;
            pRating.textContent = myLibrary[i].rating + "/10";
            pReview.textContent = myLibrary[i].review;


            div.classList.add("box");
            hr.classList.add("box");
            div.appendChild(pID);
            div.appendChild(pName);
            div.appendChild(pAuthor);
            div.appendChild(pStatus);
            div.appendChild(pRating);
            div.appendChild(pReview);
            div.appendChild(editBtn);
            div.appendChild(deleteBtn);

        

            display.appendChild(div);
            display.appendChild(hr);

        clear();

        }
    
}