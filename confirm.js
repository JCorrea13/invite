function addConfirmationLink(){
    const confirmbtn = document.getElementById('confirm-btn');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    confirmbtn.href = `https://tickets.marisolymanuel.com/Confirmations?id=${urlParams.get('id')}`;
}

addConfirmationLink();