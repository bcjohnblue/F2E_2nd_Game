import bg_poor from '../icons/svg/背景＿又老又窮.jpg';
import avatar1 from '../icons/svg/韓導1.svg';
import life from '../icons/svg/生命.svg';
import coin_number from '../icons/svg/金幣數.svg';
import ks_big_money from '../icons/svg/高雄發大財.png';
import start from '../icons/svg/start.png';
import up_key from '../icons/svg/向上鍵.svg';
import down_key from '../icons/svg/向下鍵.svg';

function preload() {
  this.load.image('bg_poor', bg_poor);
  this.load.svg('avatar1', avatar1);

  this.load.image('life1', life);
  this.load.image('life2', life);
  this.load.image('life3', life);

  this.load.svg('coin_number', coin_number);

  this.load.image('ks_big_money', ks_big_money);
  this.load.image('start', start);
  this.load.svg('up_key', up_key);
  this.load.svg('down_key', down_key);

  this.time = 90
  this.coin = 0
}

function create() {
  // this.add.image(1200, 800, bg1);
  const vw = document.body.offsetWidth;
  const vh = document.body.offsetHeight;

  this.bg_poor = this.add.tileSprite(vw / 2, vh / 2, 3835, 1080, 'bg_poor');
  this.bg_poor.setScale(vh / 1080)

  this.avatar = this.add.sprite(0.2 * vw, 0.68 * vh, 'avatar1');
  this.avatar.setScale(0.8);

  // 生命
  this.add.image(100, 100, 'life1')
  this.add.image(180, 100, 'life2')
  this.add.image(260, 100, 'life3')

  // tslint:disable-next-line:max-line-length
  this.time_text = this.add.text(0.5 * vw - 150, 55, `TIME: ${this.time}s`, { fontSize: '82px', fontFamily: 'Beirut', color: '#000' })

  // 金幣數
  this.add.image(vw - 300, 100, 'coin_number')
  this.add.text(vw - 250, 80, 'X', { fontSize: '42px', fontFamily: 'Beirut', color: '#000' })
  this.add.text(vw - 200, 80, `${this.coin}`, { fontSize: '42px', fontFamily: 'Beirut', color: '#000' })

  // 高雄發大財
  this.add.image(vw - 400, 300, 'ks_big_money').setScale(0.7)
  this.add.image(vw - 400, 520, 'start')
  this.add.image(vw - 500, 650, 'up_key')
  this.add.image(vw - 300, 650, 'down_key')
}

function update() {
  // this.bg_poor.tilePositionX += 1
}

const gameStart = {
  key: 'gameStart',
  preload,
  create,
  update
};

export default gameStart;
