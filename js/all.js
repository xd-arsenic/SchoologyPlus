// Page Modifications

let svg = '<a href="/home"><svg id="logo" viewBox="0 -2 220 31" width="174" height="31" style="fill: white;"><path d="M15.4 30.7C6.9 30.7 0 23.8 0 15.4 0 6.9 6.9 0 15.4 0s15.4 6.9 15.4 15.4c-.1 8.4-7 15.3-15.4 15.3zm0-28.1C8.3 2.6 2.6 8.3 2.6 15.4c0 7.1 5.8 12.8 12.8 12.8 7.1 0 12.8-5.8 12.8-12.8 0-7.1-5.8-12.8-12.8-12.8z"></path><path d="M14.7 16.3c-2.5-.6-5.6-1.3-5.6-4.6 0-2.9 2.4-4.7 6.1-4.7 3 0 6.2 1.4 6.7 5.1l-2.9.4c0-1-.1-1.7-1.1-2.5s-2.2-.9-3-.9c-2.1 0-3.1 1.2-3.1 2.3 0 1.5 1.7 2 3.8 2.5l1.5.4c1.9.4 5.2 1.2 5.2 4.5 0 2.6-2.3 5-6.6 5-1.8 0-3.6-.4-4.9-1.3-.5-.4-2-1.6-2.3-4.3l3-.5c0 .7 0 2 1.2 3.1.9.8 2.1.9 3.2.9 2.3 0 3.7-.9 3.7-2.6 0-1.8-1.4-2.1-3.3-2.5l-1.6-.3z"></path><g><path d="M153.7 18.6h-4.3v-1.7h7.2V25h-1.8v-1.9s.3-.3 0 0c-1.3 1.5-3.2 2.2-5.5 2.2-5.6 0-7.6-4.2-7.6-7.9 0-4.3 2.3-8.2 7.4-8.2 2.5 0 6 .9 7.1 5.1l-2.8.3c-.1-.6-.6-3.5-4.1-3.5-4.4 0-4.6 4.8-4.6 6.2 0 1.7.3 3.1 1 4.1.9 1.4 2.2 2 3.8 2 3.7 0 4.1-3 4.3-4.2l-.1-.6zM45.5 18.2C43 17.6 40 17 40 13.8c0-2.8 2.4-4.5 5.9-4.5 2.9 0 6 1.4 6.5 5l-2.8.4c0-.9-.1-1.7-1.1-2.5s-2.2-.9-2.9-.9c-2 0-3 1.2-3 2.2 0 1.5 1.6 1.9 3.7 2.4l1.5.4c1.8.4 5.1 1.2 5.1 4.4 0 2.5-2.2 4.8-6.4 4.8-1.7 0-3.5-.4-4.7-1.2-.5-.4-2-1.6-2.3-4.1l2.9-.5c0 .7 0 2 1.1 3 .9.8 2 .9 3.1.9 2.3 0 3.6-.9 3.6-2.5 0-1.7-1.3-2.1-3.2-2.4l-1.5-.5zM69 19.5c-.1.6-.3 1.5-.9 2.6-1.3 2.3-3.4 3.4-6.2 3.4-5.6 0-7.6-4.2-7.6-7.9 0-4.3 2.3-8.3 7.4-8.3 2.5 0 6.1.9 7.1 5.1l-2.8.3c-.1-.6-.6-3.5-4.1-3.5-4.4 0-4.6 4.8-4.6 6.2 0 1.6.3 3.1 1 4.1.9 1.4 2.2 2 3.8 2 3.7 0 4.1-3 4.3-4.2l2.6.2zM70.6 2.1h2.6v9.2c1.6-1.7 3.2-2 4.6-2 3.4 0 4.7 1.9 5.1 3.4.3 1 .3 2 .3 3.5V25h-2.6v-8.1c0-2 0-3.2-.6-4.1-.6-.9-1.7-1.3-2.7-1.3-1.7 0-3.4.9-4 3.3-.2.8-.2 1.7-.2 2.8V25h-2.6V2.1zM93.3 25.4c-5.3 0-7.5-3.9-7.5-8 0-3.4 1.7-8.2 7.6-8.2 5 0 7.4 3.9 7.3 8.1 0 4.6-2.7 8.1-7.4 8.1zm4.5-10.2c-.6-3-2.6-3.9-4.3-3.9-3.5 0-4.9 2.7-4.9 6.2 0 3.2 1.3 5.9 4.7 5.9 4.3 0 4.6-4.5 4.7-6 0-1.1-.1-1.8-.2-2.2zM110 25.4c-5.3 0-7.5-3.9-7.5-8 0-3.4 1.7-8.2 7.6-8.2 5 0 7.4 3.9 7.3 8.1 0 4.6-2.7 8.1-7.4 8.1zm4.5-10.2c-.6-3-2.6-3.9-4.3-3.9-3.5 0-4.9 2.7-4.9 6.2 0 3.2 1.3 5.9 4.7 5.9 4.3 0 4.6-4.5 4.7-6 0-1.1-.1-1.8-.2-2.2zM122.6 2.1V25h-2.5V2.1h2.5zM132.7 25.4c-5.3 0-7.5-3.9-7.5-8 0-3.4 1.7-8.2 7.6-8.2 5 0 7.4 3.9 7.3 8.1 0 4.6-2.8 8.1-7.4 8.1zm4.4-10.2c-.6-3-2.6-3.9-4.3-3.9-3.5 0-4.9 2.7-4.9 6.2 0 3.2 1.3 5.9 4.7 5.9 4.3 0 4.6-4.5 4.7-6 0-1.1-.1-1.8-.2-2.2zM169.9 9.5h-2.5l-3.9 6.2-3.8-6.2h-2.9l5.5 8.4V25h2.4v-7.1l5.6-8.4zM174.9 11c0 .9-.8 1.7-1.7 1.7-1 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7zm-3 0c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3-.8 0-1.3.6-1.3 1.3zm1 .8h-.4v-1.7c.2 0 .4-.1.6-.1.3 0 .5.1.6.1.1.1.2.2.2.4s-.2.3-.3.4c.2.1.2.2.3.4 0 .3.1.3.1.4h-.4c-.1-.1-.1-.2-.1-.4s-.1-.3-.3-.3h-.2v.8zm0-.9h.2c.2 0 .4-.1.4-.2 0-.2-.1-.3-.4-.3h-.2v.5z"></path></g></svg></a>';
let modalHTML = `<div id="settings-modal" class="modal"> <div class="modal-content"> <div class="modal-header"> <span class="close">&times;</span> <p class="modal-title">Schoology Plus Settings</p> </div><div class="modal-body"> </div><div class="modal-footer"> <p class="modal-footer-text">&copy; Aaron Opell 2018 | <a href="https://chrome.google.com/webstore/detail/${chrome.runtime.id}">Schoology Plus v${chrome.runtime.getManifest().version}${chrome.runtime.getManifest().update_url ? '' : ' dev'}</a> | <a href="https://github.com/aopell/SchoologyPlus">View Source and Contribute</a></p></div></div></div>`;
document.getElementById("primary-home").insertAdjacentElement("afterEnd", createElement("li", undefined, { id: "primary-home", innerHTML: '<a href="/grades"><span>Grades</span></a>' }));
document.getElementById("home").innerHTML = svg;
document.body.appendChild(document.createElement("div")).innerHTML = modalHTML;

let modal = document.getElementById("settings-modal");

let video = document.body.appendChild(createElement("video", ["easter-egg"], {
    onended: function () {
        this.style.visibility = "hidden";
    }
}));

let source = createElement("source", [], {
    src: "https://gist.github.com/aopell/0fe2408cffbab2b6fadb18ebaa28808f/raw/77853f137329c042c34bdb5be38c1930357c0531/cut.webm",
    type: "video/webm"
});

let modalBody = document.querySelector(".modal-body");
modalBody.appendChild(getModalContents());

let sourceSet = false;

document.body.onkeydown = (data) => {
    if (data.altKey && data.code === "KeyC") {
        if (!sourceSet) {
            video.appendChild(source);
            sourceSet = true;
        }
        video.style.visibility = "visible";
        video.currentTime = 0;
        video.play();
    }
    else if (data.key === "Escape") {
        video.style.visibility = "hidden";
        video.pause();
    }
    data.preventDefault = false;
};

document.querySelector(".user-menu").prepend(createElement("li", ["schoology-plus-icon"], undefined, [
    createElement("a", ["nav-icon-button"], { href: "#", onclick: openOptionsMenu }, [
        createElement("img", ["icon-unread-requests"], { src: chrome.runtime.getURL("imgs/plus-icon.png"), width: 24 })
    ])
]));

document.querySelector(".close").onclick = modalClose;

window.onclick = function (event) {
    if (event.target == modal) {
        modalClose();
    }
}

function openOptionsMenu() {
    modalBody.innerHTML = "";
    modalBody.appendChild(getModalContents());
    document.getElementById("settings-modal").style.display = "block";
}

function modalClose() {
    if (anySettingsModified()) {
        if (!confirm("You have unsaved settings.\nAre you sure you want to exit?")) return;
        updateSettings();
    }
    modal.style.display = "none";
}