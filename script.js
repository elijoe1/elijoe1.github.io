async function listFiles() {
    const repo = "elijoe1/elijoe1.github.io";
    const path = "eval"; // Leave empty for root, or specify a subdirectory
    
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
    const files = await response.json();

    let fileList = "<ul>";
    files.forEach(file => {
        fileList += `<li><a href="${file.download_url}">${file.name}</a></li>`;
    });
    fileList += "</ul>";

    document.getElementById("file-list").innerHTML = fileList;
}
window.onload = listFiles;
