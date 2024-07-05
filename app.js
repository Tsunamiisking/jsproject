
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)

}
 
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
            <a href= '${leads[i]}' target='_blank'>
                ${leads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

function saveLead(e) {
    if ((e.type === "click") || ( e.type === "keypress" && e.keyCode == 13)) { //Keypress not working idk why God abeg
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }

}
inputBtn.addEventListener("click", saveLead)

inputBtn.addEventListener("keypress", saveLead)


deleteBtn.addEventListener("dblclick", () =>{
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
