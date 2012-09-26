//constructor function; defines the Accordian class
	var Accordion = function(options){
			this.$el = $(options.sel);
			this.speed = options.speed;
			
			//intializing function goes here
			this.contractall_butfirst();
			this.bind();
	};
	
//makes the Accordian class inherit the following methods
	
	
	Accordion.prototype.contractall_butfirst=function(){
		this.$el.find('.content').slideUp(0).eq(0).slideDown(0);
	}
	
	Accordion.prototype.bind = function(){
		var that = this;
		
		this.$el.on('click', '.label', function(){
			console.log(this, that);
			
			that.$el.find('.content').slideUp(that.speed);
			$(this).next().slideDown(that.speed);
		});	
	};
	

	Accordion.prototype.contractall=function(){
		this.$el.find('.content').slideUp(this.speed);
	}
	Accordion.prototype.expandall=function(){
		this.$el.find('.content').slideDown(this.speed);
	}
	

/////////////////////////////////////////////////////////////////