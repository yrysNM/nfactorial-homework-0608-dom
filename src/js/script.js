import headerVisulationWaveSurfer from "./modules/headerAudio";
import modifiedAudio              from "./modules/modifiedAudio";
import soundMusic                 from "./modules/soundMusic";
import cardAudio                  from "./modules/cardAudio";

window.addEventListener("DOMContentLoaded", () => {

  headerVisulationWaveSurfer({
    playbtn: "#playbtn",
    play_pause: ".play-pause",
    clPlayer: ".player",
    arrow: ".arrow",
    clAudio: "audio", 
    waveform: "waveform",
    wave: "wave"

  });

  modifiedAudio({
    audioMp3: "audioMp3",
    soung1: "soung1",
    songName: "songName", 
    songKinds: "songKinds",
    diskImg: "diskImg",
  });

  modifiedAudio({
    audioMp3: "audioMp3",
    soung1: "soung2",
    songName: "songName", 
    songKinds: "songKinds",
    diskImg: "diskImg",
  });

  soundMusic("#soundAudio", ".player audio");
  cardAudio();

});