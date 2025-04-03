document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM полностью загружен');
	

	const othergames = document.getElementById("othergames");

 (function(){
	

	var Memory = {

		
		init: function(cards){
			
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

	
		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     		this.guess = null;
			this.binding();
		},


		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},


		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
						} else {
							_.guess = null;
							_.paused = true;
							setTimeout(function(){
								$(".picked").removeClass("picked");
								Memory.paused = false;
							}, 600);
						}

				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},


		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		
		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},


		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},
        


		shuffle: function(array){
			var counter = array.length, temp, index;
		   	while (counter > 0) {
	        	index = Math.floor(Math.random() * counter);
	        	counter--;
	        	temp = array[counter];
	        	array[counter] = array[index];
	        	array[index] = temp;
		    	}
		    return array;
		},


		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://i.postimg.cc/NMt9sRmK/cardbackfish.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});

			return frag;
		}
	};

	// карточки
	var cards = [
		{	
		
			name: "Card1",
			img: "https://i.postimg.cc/MKvQYC25/Group-2131328179.png",
			id: 1,
		},
		{
			name: "Card2",
			img: "https://i.postimg.cc/DyHbpx7T/Group-2131328180.png",
			id: 2
		},
		{
			name: "Card3",
			img: "https://i.postimg.cc/wMbspVJD/Group-2131328181.png",
			id: 3
		},
		{
			name: "Card4",
			img: "https://i.postimg.cc/y6fRcV5W/Group-2131328182.png",
			id: 4
		}, 
		{
			name: "Card5",
			img: "https://i.postimg.cc/bvHDJ8ky/Group-2131328183.png",
			id: 5
		},
		{
			name: "Card6",
			img: "https://i.postimg.cc/zGhHsTfR/Group-2131328184.png",
			id: 6
		},
		{
			name: "Card7",
			img: "https://i.postimg.cc/CKVnSdZr/Group-2131328185.png",
			id: 7
		},
		{
			name: "Card8",
			img: "https://i.postimg.cc/nzFs95Gv/Group-2131328186.png",
			id: 8
		},
		{
			name: "Card9",
			img: "https://i.postimg.cc/Hx6rw26F/Group-2131328187.png",
			id: 9
		},
		{
			name: "Card10",
			img: "https://i.postimg.cc/D0m8BXD0/Group-2131328188.png",
			id: 10
		},
		{
			name: "Card11",
			img: "https://i.postimg.cc/Y2y4jdGW/Group-2131328189.png",
			id: 11
		},
		{
			name: "Card12",
			img: "https://i.postimg.cc/yx5W5N4P/Group-2131328190.png",
			id: 12
		},
	];
    

	Memory.init(cards);


})();

othergames?.addEventListener("click", () => {
	window.location.href = "../index.html#choiceGame";
  });

});