$(window).resize(function() {
    checkAndProcessWindowSize();
    orderWidth()
});
$(document).ready(function(){
    let progressValue = 1;
    function checkAndProcessWindowSize() {
        if ($(window).width() < 1000) {
            $('.next-button').click(function(){ 
                if (progressValue == 0) {
                    $('.progress-next').css('height','25%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if (progressValue == 2) {
                    $('.progress-next').css('height','50%');
                    $('.next-button').text('Müşteriye SMS Gönder');
                } else if (progressValue == 3) {
                    $('.progress-next').css('height','70%');
                    $('.previous-button').css('display','none');
                    $('.next-button').css('display','none');
                    $('.order-title').css('display','block');
                }
                progressValue++;
            });

            $('.previous-button').click(function(){ 
                if(progressValue == 2) {
                    $('.progress-next').css('height','20%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if(progressValue == 1) {
                    $('.progress-next').css('height','0%');
                    $('.next-button').text('Siparişi Onayla'); 
                }
                progressValue--;
            });
        }
    }

    function orderWidth() {
        if ($(window).width() >= 1000) {
            $('.next-button').click(function(){ 
                if (progressValue === 1) {
                    $('.progress-next').css('width','20%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if (progressValue === 2) {
                    $('.progress-next').css('width','40%');
                    $('.next-button').text('Müşteriye SMS Gönder');
                } else if (progressValue === 3) {
                    $('.progress-next').css('width','60%');
                    $('.previous-button').css('display','none');
                    $('.next-button').css('display','none');
                    $('.order-title').css('display','block');
                }
                progressValue++;
            });
    
            $('.previous-button').click(function(){ 
                if(progressValue == 2) {
                    $('.progress-next').css('width','20%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if(progressValue == 1) {
                    $('.progress-next').css('width','0%');
                    $('.next-button').text('Siparişi Onayla'); 
                }
                progressValue--;
            });
        } else {
            $('.next-button').click(function(){ 
                if (progressValue == 1) {
                    $('.progress-next').css('height','30%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if (progressValue == 2) {
                    $('.progress-next').css('height','30%');
                    $('.next-button').text('Müşteriye SMS Gönder');
                } else if (progressValue == 3) {
                    $('.progress-next').css('height','30%');
                    $('.previous-button').css('display','none');
                    $('.next-button').css('display','none');
                    $('.order-title').css('display','block');
                }
                progressValue++;
            });
    
            $('.previous-button').click(function(){ 
                if(progressValue == 2) {
                    $('.progress-next').css('height','20%');
                    $('.next-button').text('Siparişi Kargola'); 
                } else if(progressValue == 1) {
                    $('.progress-next').css('height','0%');
                    $('.next-button').text('Siparişi Onayla'); 
                }
                progressValue--;
            });
        }
    }
    

    checkAndProcessWindowSize();
    orderWidth()

  
});
