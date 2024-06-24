input = document.getElementById("search")

function search() {
    location.assign("https://cn.bing.com/search?q=" + input.value);
}

input.onsearch=search
