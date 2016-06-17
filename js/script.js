/*
@title-Caclculator
@author-marwen
@date-13/06/2016
marwen005@hotmail.com
*/

$(function(){


$(document).ready(function() { $(document).keydown(function(key)

 { switch(parseInt(key.which,10)) {
case 83: $('.mario').animate({left: "-=20px"}, 'fast'); 
break;
case 81: $('.mario').animate({top: "+=20px"}, 'fast'); 
break;
case 90: $('.mario').animate({top:"-=20px"},'fast'); 
break;
case 70: $('.mario').animate({left:"+=20px"},'fast'); 
break;
case 76: $('.mario').animate({left:"+=30px", top:"-=55px"}, 'slow'); 
         $('.mario').animate({top:"+=55px"},'fast');
 break; 
case 69: $('.mario').effect("bounce",{times:3, distance: 100}, 900); 
break;
default:
 break;
}
});
});
/*
*****Colistion coins 


var Coin = Item.extend({
	init: function(x, y, level) {
		this._super(x, y, false, level);
		this.setImage(images.objects, 0, 0);
		this.setupFrames(10, 4, true);
	},
	activate: function(from) {
		if(!this.activated) {
			this.level.playSound('coin');
			from.addCoin();
			this.remove();
		}
		this._super(from);
	},
	remove: function() {
		this.view.remove();
	},
}, 'coin');
var CoinBoxCoin = Coin.extend({
	init: function(x, y, level) {
		this._super(x, y, level);
		this.setImage(images.objects, 96, 0);
		this.clearFrames();
		this.view.hide();
		this.count = 0;
		this.frames = Math.floor(150 / constants.interval);
		this.step = Math.ceil(30 / this.frames);
	},
	remove: function() { },
	addToGrid: function() { },
	addToLevel: function() { },
	activate: function(from) {
		this._super(from);
		this.view.show().css({ 'bottom' : '+=8px' });
	},
	act: function() {
		this.view.css({ 'bottom' : '+=' + this.step + 'px' });
		this.count++;
		return (this.count === this.frames);
	},
});
var CoinBox = Item.extend({
	init: function(x, y, level, amount) {
		this._super(x, y, true, level);
		this.setImage(images.objects, 346, 328);
		this.setAmount(amount || 1);
	},
	setAmount: function(amount) {
		this.items = [];
		this.actors = [];
		
		for(var i = 0; i < amount; i++)
			this.items.push(new CoinBoxCoin(this.x, this.y, this.level));
	},
	activate: function(from) {
		if(!this.isBouncing) {
			if(this.items.length) {
				this.bounce();
				var coin = this.items.pop();
				coin.activate(from);
				this.actors.push(coin);
				
				if(!this.items.length)
					this.setImage(images.objects, 514, 194);
			}
		}
			
		this._super(from);
	},
	playFrame: function() {
		for(var i = this.actors.length; i--; ) {
			if(this.actors[i].act()) {
				this.actors[i].view.remove();
				this.actors.splice(i, 1);
			}
		}
		
		this._super();
	},
}, 'coinbox');
var MultipleCoinBox = CoinBox.extend({
	init: function(x, y, level) {
		this._super(x, y, level, 8);
	},
}, 'multiple_coinbox');

*/
});