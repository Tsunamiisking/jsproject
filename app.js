
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()

}

function saveLead(e) {
    if ((e.type === "click") || ( e.type === "keypress" && e.keyCode == 13)) { //Keypress not working idk why God abeg
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    }

}
inputBtn.addEventListener("click", saveLead)

inputBtn.addEventListener("keypress", saveLead)

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' target='_blank'>
                ${myLeads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", () =>{
    localStorage.clear()
    myLeads = []
    renderLeads()
})
