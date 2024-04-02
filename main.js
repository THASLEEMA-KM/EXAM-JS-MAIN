
const addNote = () =>{
    if(userInput.value){
        output.innerHTML += `
        <div>
            <input class="text-success" type="checkbox" id="noteCheckbox">
            <label for="noteCheckbox">${userInput.value}</label>
            <button class="btn btn-danger" onclick="deleteNote(this)">Delete</button>
        </div>
        `
    }else{
        alert("please enter a valid note!")
    }
}

const deleteNote = (button) => {
    button.parentNode.remove();
}