var menuItems = [
    {name: 'Caffè',price: 1.00 },
    {name: 'Cappuccino', price: 1.50 },
    {name: 'Brioche', price: 1.00 },
    // Aggiungi qui altri elementi del menù
];

var order = [];

function addToOrder(item) {
    order.push(item);
    displayOrder();
}

function displayMenu() {
    var menuDiv = document.getElementById('menu');
    menuItems.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.textContent = item.name + ' - €' + item.price.toFixed(2);
        var orderButton = document.createElement('button');
        orderButton.textContent = 'Ordina';
        orderButton.onclick = function() { addToOrder(item); };
        itemDiv.appendChild(orderButton);
        menuDiv.appendChild(itemDiv);
    });
}

function displayOrder() {
    let tot = 0;
    var orderDiv = document.getElementById('order');
    orderDiv.innerHTML = '';
    var totId = document.createElement('div');
    order.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.textContent = item.name + ' - €' + item.price.toFixed(2);
        orderDiv.appendChild(itemDiv);
        tot += item.price;
    });
    orderDiv.appendChild(totId);
    totId.textContent = 'Totale = €' + tot.toFixed(2);
    totId.classList.add("totale");
    var ordinaButton = document.createElement("button");
    ordinaButton.innerHTML = 'ORDINA ORA'
    orderDiv.appendChild(ordinaButton);
    ordinaButton.addEventListener('click', ordina);
}

function ordina() {
    var orderDiv = document.getElementById('order');
    var ordineFatto = document.createElement('p');
    ordineFatto.innerHTML = 'ordine effettuato con successo';
    orderDiv.appendChild(ordineFatto);
    this.removeEventListener('click', ordina)
}

displayMenu();