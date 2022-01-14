function Game(Genre, Release, Developer, Platform) {
    this.Game_Genre = Genre;
    this.Game_Release = Release;
    this.Game_Developer = Developer;
    this.Game_Platform = Platform;
}
var Yilmar = new Game("FPS", 2016, "Blizzard", "Playstation");
var Olenis = new Game("RPG", 2018, "Respawn", "PC");
var Chris = new Game("Gacha", 2020, "NetMarble", "Mobile");
function myFunction() {
document.getElementById("Keywords_and_Constructors").innerHTML = 
"Olenis plays a " + Olenis.Game_Genre + " made by " + Olenis.Game_Developer + " That came out in " + Olenis.Game_Release;
} 