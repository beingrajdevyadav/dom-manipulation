// ------>>>>>------->>>>>>------>>>>>>
//   selection of html tags
// ------<<<<<-------<<<<<<------<<<<<<
const createBtn = document.querySelector("#createBtn");
const box = document.querySelector("#box");


// ------>>>>>------->>>>>>------>>>>>>
//   function to perform on btn click
// ------<<<<<-------<<<<<<------<<<<<<
createBtn.addEventListener('click', function () {
    let tagName = document.querySelector("#tagName").value;
    let tagText = document.querySelector("#tagText").value;
    let tagColor = document.querySelector("#color").value;
    let tagBGColor = document.querySelector("#bg-color").value;
    let tagMargin = document.querySelector("#margin").value;
    let tagPosition = document.querySelector("#tagPosition").value;

    // ------>>>>>------->>>>>>------>>>>>>
    //  html element creation dynamically
    // ------<<<<<-------<<<<<<------<<<<<<

    let tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.style.color = tagColor;
    tag.style.backgroundColor = tagBGColor;
    tag.style.margin = +tagMargin + "px";
    // ------>>>>>------->>>>>>------>>>>>>
    //   conditions to place created tag
    // ------<<<<<-------<<<<<<------<<<<<<

    if (tagPosition == "append") {
        box.append(tag);
    } else if (tagPosition == "prepend") {
        box.prepend(tag);
    } else if (tagPosition == "before") {
        box.before(tag);
    } else if (tagPosition == "after") {
        box.after(tag);
    }

});