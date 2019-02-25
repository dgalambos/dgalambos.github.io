function play(name){
  switch(name) {
    case 'andy':
      fpath = "../sounds/andy/andys_coming.mp3";
      break;
    case 'bahar':
      fpath = "../sounds/bahar/Bahar.mp3";
      break;
    case 'craig':
      fpath = "../sounds/craig/damn_you_craig.mp3";
      break;
    case 'david':
      fpath = "../sounds/david/david.mp3";
      break;
    case 'devon':
      fpath = "../sounds/devon/none.mp3";
      break;
    case 'doron':
      fpath = "../sounds/doron/doron_attacks_you.mp3";
      break;
    case 'ertu':
      fpath = "../sounds/ertu/none.mp3";
      break;
    case 'gerald':
      fpath = "../sounds/gerald/come_on_gerald_long.mp3";
      break;
    case 'igor':
      fpath = "../sounds/igor/igor.mp3";
      break;
    case 'joec':
      fpath = "../sounds/joec/joe_nasty_mood.mp3";
      break;
    case 'joer':
      fpath = "../sounds/joer/joe_voicemail.mp3";
      break;
    case 'lo':
      fpath = "../sounds/lo/dammit_lorence.mp3";
      break;
    case 'marco':
      fpath = "../sounds/marco/marco_too_young.mp3";
      break;
    case 'nika':
      fpath = "../sounds/nika/nika_im_ten.mp3";
      break;
    case 'phil':
      fpath = "../sounds/phil/you_betrayed_me_phil.mp3";
      break;
    case 'todd':
      fpath = "../sounds/todd/damn_todd.mp3";
      break;
    case 'tricia':
      fpath = "../sounds/tricia/tricia_walk_off.mp3";
      break;
    case 'zk':
      fpath = "../sounds/zk/zk_jr.mp3";
      break;
    default:
      fpath = "../sounds/error/error.mp3";
      break;
  }
    var audio = new Audio(fpath);
  audio.play();
}
