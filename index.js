uj.addEventListener('click',
async e =>{
    let q = await fetch("https://labs.bible.org/api/?passage=random&type=json");
    let j = await q.json();
    console.log(j);
    document.getElementById("book");
    book.textContent = j[0]["bookname"];
    chapter.textContent = j[0]["chapter"];
    verse.textContent = j[0]["verse"];
    verse_text.textContent = j[0]["text"];
}
)
uj.click();
