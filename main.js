$(document).ready(function(){
	$(".aboutSection").click(function(){
		$(".aboutPanel").slideToggle("1000");
	});
	$(".featureSection").click(function(){
		$(".featurePanel").slideToggle("1000");
	});
	$(".dashboardSection").click(function(){
		$(".dashboardPanel").slideToggle("1000");
	});
	$(".reviewSection").click(function(){
		$(".reviewPanel").slideToggle("1000");
	});
	$(".signupSection").click(function(){
		$(".signupPanel").slideToggle("1000");
	});
});

$(document).ready(function(){
    	y=setInterval(slideChange,2000);
    });

function slideChange(dir)
{
    var currentImage=$(".active");
    var nextImage=currentImage.next();
    var prevImage=currentImage.prev();
    if(dir=='next')
    {
    	if(nextImage.length)
    	{
    		nextImage.addClass('active');
    	}
    	else
    	{
    		$('.slideSection img').firstClass().addClass('active');
    	}	
    }
    else
    {
        if(prevImage.length)
        {
        	prevImage.addClass('active');
        }
        else
        {
        	$('.slideSection img').last().addClass('active');
        }
    }
    currentImage.removeClass('active');
}

$(document).ready(function(){
	var items=$('.item');
	$(".pageinImage").on("click", function(){
		clearInterval(y);
		for(let i=0;i<3;i++){
			items.eq(i).removeClass('active');
		}
		var ab=this.id;
		items.eq(ab).addClass('active');	
		y=setInterval(slideChange,2000);	
	});
});