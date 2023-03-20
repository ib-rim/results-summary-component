let summaryItems = document.getElementsByClassName("summary-item");

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    summaryItems[i].getElementsByClassName("summary-item-name")[0].innerHTML = item.category;
    summaryItems[i].getElementsByClassName("summary-item-value")[0].innerHTML = item.score;
}