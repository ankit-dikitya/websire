function openTab(tabName) {
    var i, tabcontent, tabbtn;
    tabcontent = document.getElementsByClassName("tab-content");
    tabbtn = document.getElementsByClassName("tab-btn");
    
    // Hide all tab contents
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].classList.remove("active");
    }

    // Show the selected tab and add active class
    document.getElementById(tabName).style.display = "block";
}
