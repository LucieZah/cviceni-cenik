const selectPlan = (planNumber) => {
    const one = document.querySelector ("#plan1")
    const two = document.querySelector ("#plan2")
    const three = document.querySelector ("#plan3")

    if (planNumber === 1){
        one.classList.add("plan--selected")
    } else {
        one.classList.remove("plan--selected")
    }

    if (planNumber === 2){
        two.classList.add("plan--selected")
    } else {
        two.classList.remove("plan--selected")
    }

    if (planNumber === 3){
        three.classList.add("plan--selected")
    } else {
        three.classList.remove("plan--selected")
    }
   } 
   
selectPlan (2)
selectPlan (3)
