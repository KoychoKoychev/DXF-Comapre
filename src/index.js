
// Grab fileText in node.js or browser
document.querySelector('input').addEventListener('change', (ev) => {
    var file = ev.target.files[0]

    var reader = new FileReader();
    
    reader.onprogress = () => {
        document.querySelector('#load').style.display = 'block' 
    };
    reader.onloadend = (evt) => {
        document.querySelector('#load').style.display = 'none' 
        var fileReader = evt.target;
        if(fileReader.error) return console.log("error onloadend!?");

        var parser = new window.DxfParser();
        var dxf = parser.parseSync(fileReader.result);
        console.log(dxf);
    };

    reader.readAsText(file);
})
