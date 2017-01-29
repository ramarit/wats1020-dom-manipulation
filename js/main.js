//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    $('#login').on('click', function() {
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
        $('#login-form').hide();
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)  
        $('div.user-info').fadeIn(500); 
        $('.user-fullname').html(userInfo.firstName + " " + userInfo.lastName);         
    });



    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

//  When user clicks a "view details" button
    $('.view-details').on('click', function(event){
        console.log(event);
        var targetElement = event.target;
        //find the parent of that element.
        var container = targetElement.parentElement.parentElement;
        //Within that parent, find all the elements that have the class `details`.
        $(container).find('.details').each(function(index, el){
          //Toggle visibility of all the elements within that parent with the class `details`.  
          if ($(el).is(':visible')){
              $(el).fadeOut();
            targetElement.innerText = "View Details";
            // Change the text of the "view details" button to read "hide details" so the user
            // understands they can hide the text again.
            }else{
              $(el).fadeIn();
              targetElement.innerText = "Hide Details";
            }
        });
    });

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

    //      1. Set up an event listener on the buttons with the `vote` class.
    $('.vote').on('click', function(){
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
        var vote = $(this).data('vote');
    //      3. Increment the counter for whichever vote talley is affected.
        if (vote === 'great') {
            voteCounts.great++;
            voteCounts.total++;
        }
        else if (vote === 'greatest') {
            voteCounts.greatest++;
            voteCounts.total++;
        }
    //      4. Determine the respective percentages (out of 100) for each progress bar.
        var widthGreat = voteCounts.great / voteCounts.total * 100;
        var widthGreatest = voteCounts.greatest / voteCounts.total * 100;
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
        $('.great-progress').css({
            width: widthGreat + "%"
        });
        $('.greatest-progress').css({
            width: widthGreatest + "%"
        });
    });
});
