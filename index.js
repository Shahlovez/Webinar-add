
let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
            event.preventDefault()
    
            let userData = new FormData(event.target)
            
            let userFirstName = userData.get("firstName")
            let userEmailAddress = userData.get("emailAddress")
            
            let updatedHtmlContent = `
                <h2>Congratulations, ${userFirstName}!</h2>

                <p>You're on your way to landing a new job!</p>
                
                <p class="fine-print">You will get weekly tips on how to successfully pass your next technical interview sent to ${userEmailAddress}</p>
                `
            let mainContent = document.getElementById("Main-Content")
            mainContent.innerHTML = updatedHtmlContent
        })
