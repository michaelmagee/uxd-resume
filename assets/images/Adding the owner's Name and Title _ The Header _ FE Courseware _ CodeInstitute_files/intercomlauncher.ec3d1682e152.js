/* global $ Intercom INTERCOM_APP_ID TUTOR_BLACKLIST LESSONS studentData */
$ (window).on("load", function(){
    // Verify we are on the tutor page
    if ($('#tutor-form').length == 0){
        return;
    }

    // Hide the 'Scroll to top' button, since it's in the same position as the Intercom widget
    $('#scrolltop').hide();

    // Grab module name
    var module = document.querySelector('header.header-global h2');
    window.module = module.innerHTML.trim();

    // Enable the combobox widget
    populateUnitDatalists();
    setModule();
});

function launchIntercom(event){
    // prevent page reload
    event.preventDefault();

    // a helper to get form values
    var formElements = $('#tutor-form')[0].elements;
    
    function formValue(field) {
        return formElements[field].value;
    }

    Intercom('trackEvent', 'question', {
        name: studentData.username,
        username: studentData.username,
        email: studentData.email,
        module: window.module,
        lesson: formValue('lesson'),
        type: formValue('question_type'),
        source_code_URL: formValue('sourceURL'),
        profile: 'https://amos.codeinstitute.net/profile/'+studentData.email,
    });

    Intercom('boot',{
        app_id: INTERCOM_APP_ID,
        name: studentData.username,
        username: studentData.username,
        email: studentData.email,
        module: window.module,
        lesson: formValue('lesson'),
        type: formValue('question_type'),
        source_code_URL: formValue('sourceURL'),
        profile: 'https://amos.codeinstitute.net/profile/'+studentData.email,
        custom_launcher_selector: '#launch-intercom',
    });
    
    // Open new message window
    Intercom('showNewMessage');

    // Close the intercom widget after 12 hours
    setTimeout(function(){
        Intercom('shutdown');
    }, 12*60*60*1000);
}

function setModule() {
    var formElements = $('#tutor-form')[0].elements;
    var module = window.module;
    formElements.lesson.setAttribute('list', module);
}

function populateUnitDatalists() {
    var newDatalist = $('<datalist id="' + module +'">').appendTo('#datalists');
    LESSONS[module].forEach(function(lessonName) {
        newDatalist.append('<option value="' + lessonName + '" class="lesson"></option>');
    });
}