// File: app.js
// Student Name: Henry Pan
// Student ID: 301142574
// Date: Oct 24, 2021

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/business-contacts-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();