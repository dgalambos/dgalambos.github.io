function play(name){
  folder = './sounds/' + name + '/'
  switch(name) {
    case 'andy':
      files = ['andys_coming.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'bahar':
      files = ['Bahar.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'craig':
      files = ['damn_you_craig.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'david':
      files = ['david.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'devon':
      files = ['none.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'doron':
      files = ['doron_attacks_you.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'ertu':
      files = ['none.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'gerald':
      files = ['come_on_gerald_long.mp3', 'come_on_gerald.mp3', 'yeah_gerald.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'igor':
      files = ['igor.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'joec':
      files = ['joe_nasty_mood.mp3', 'joe_ready.mp3', 'shh.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'joer':
      files = ['joe_voicemail.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'lo':
      files = ['dammit_lorence.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'marco':
      files = ['marco_too_young.mp3', 'marco_my_baby.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'nika':
      files = ['hi_im_nika.mp3', 'nika_im_ten.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'phil':
      files = ['you_betrayed_me_phil.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'todd':
      files = ['todd_x3.mp3', 'damn_todd.mp3']
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'tricia':
      files = 'tricia_walk_off.mp3';
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'zk':
      files = ['zk_jr.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    default:
      fpath = './sounds/error/error.mp3';
      break;
  }
  var audio = new Audio(fpath);
  audio.play();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
