
function get_price()
{
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((response) =>response.json()).then(data =>
    {
        document.getElementById("price").innerHTML = data.bpi.USD.rate ;
        console.log(data);
    })
}

function get_price()
{
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((response) =>response.json()).then(data =>
    {
        document.getElementById("price").innerHTML = data.bpi.USD.rate ;
        console.log(data);
    })
}