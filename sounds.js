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
    case 'dan':
      files = ['spencer_bros.mp3', 'way_to_go_dan.mp3', 'way_to_go_dan.mp3', 'way_to_go_dan.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'david':
      files = ['david.mp3', 'what_are_you_thinking_about.mp3', 'ew_david.mp3', 'david_murdered.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'devon':
      files = ['devon_no_limits.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'doron':
      files = ['doron_attacks_you.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'drew':
      files = ['spencer_bros.mp3', 'drew_the_farm_kid.mp3', 'drew_the_farm_kid.mp3', 'drew_the_farm_kid.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'ertu':
      files = ['ertugrul.mp3'];
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
      files = ['joe_nasty_mood.mp3', 'joe_ready.mp3', 'shh.mp3', 'shh.mp3'];
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
      files = ['tricia_walk_off.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'zk':
      files = ['zk_jr.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'gabi':
      files = ['hey_guys_its_gabi.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'hailey':
      files = ['hailey_game_winner.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'lance':
      files = ['lance_full_fledge.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'matthieu':
      files = ['je_mappelle_matthieu.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'rich':
      files = ['hey_richard.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'shannon':
      files = ['shannon_dublin.mp3', 'shannon_pizza.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'sophia':
      files = ['sophia_social_robot.mp3'];
      fpath = folder+files[getRandomInt(files.length)];
      break;
    case 'ian':
      files = ['ian_mid_pee.mp3'];
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
