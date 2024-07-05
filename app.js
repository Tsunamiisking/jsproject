
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


function saveLead(e) {
    if ((e.type === "click") || ( e.type === "keypress" && e.keyCode == 13)) {
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
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        JSON.parse(localStorage.getItem(myLeads))
        console.log(myLeads)
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' target='_blank'>
                ${myLeads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}
