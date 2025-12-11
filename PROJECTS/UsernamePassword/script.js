function AddData(){
    const site = document.getElementById("siteName").value.trim();
    const UN = document.getElementById("siteName").value.trim(); 
    const PS = document.getElementById("siteName").value.trim();

    const DataPacket = {
        Website: site,
        Username: UN,
        Password: PS
    };

    console.log(DataPacket);

    JSON.stringify(DataPacket)

}