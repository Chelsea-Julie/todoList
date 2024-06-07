let chores = JSON.parse(localStorage.getItem("chores")) ? JSON.parse (localStorage.getItem("chores") ) 
: localStorage.setItem("chores", 
    JSON.stringify(
      []
    )
)

document.querySelector (".add").addEventListener("click", () => {
    let entry  = document.querySelector(".list")
    chores.push(entry.value)
    chores.forEach(chore => { console.log(chore);})
    
} )