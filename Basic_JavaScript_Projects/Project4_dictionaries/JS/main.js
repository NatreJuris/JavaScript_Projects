function my_Dictionary() {
    var Animal= {
        name:"blue",
        team:"bluedog",
        position:"bluest",
        Sound: "chirp",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
