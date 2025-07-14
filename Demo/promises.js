async function fetchDatas() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Daten erfolgreich abgerufen!");
        }, 1000);
    });
}


async function process() {
    try{
        const data = await fetchDatas();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
process();
// fetchDatas().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// }).finally(() => {
//     console.log("Fetch operation completed.");
// });