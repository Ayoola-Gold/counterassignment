let count = 0

function updateCount(){
    document.getElementById("counter").innerHTML = count;
}

function increaseCount(){
    count++;
    updateCount();
}

function decreaseCount(){
count --;
updateCount();
}

function resetCount(){
    count = 0;
    updateCount();
}