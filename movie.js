
async function main() {
    const id = localStorage.getItem("id");
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=1e94ff26&type`);
}