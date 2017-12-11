$(document).ready(init)

function init() {
    $('.add-phone').append('(760)989-2862')
    $('.add-email').append('chrisbryant.jscript@gmail.com')
    $('#my_students_grade').on('click', ()=> {
        for (var i = 0; i < modal_data[0].technologies.length; i++) {
            var $tech_item = $('<li>', {
                text: modal_data[0].technologies[i]
            })
            $('.tech-list').append($tech_item)
        }
        var $app_img = $('<img>', {
                src: modal_data[0].images,
                class: 'modal-img',
            })
        var $live_site = $('<a>', {
            href: modal_data[0].site,
            text: 'My Students Grade'
        })
        var $git_hub = $('<a>', {
            href: modal_data[0].github,
            text: 'Github Repo'
        })
        $('.modal-images').append($app_img)
        $('#modal-header').append('My Students Grade')
        $('.modal-desc').append(modal_data[0].description)
        $('.modal-git').append($git_hub)
        $('.live-site').append($live_site)
        modal[0].style.display = "block"
        $('body').addClass('modal-open')  
    })

    $('#sport_trace').on('click', ()=> {
        for (var i = 0; i < modal_data[1].technologies.length; i++) {
            var $tech_item = $('<li>', {
                text: modal_data[1].technologies[i]
            })
            $('.tech-list').append($tech_item)
        }
        var $app_img = $('<img>', {
                src: modal_data[1].images,
                class: 'modal-img',
            })
        var $live_site = $('<a>', {
            href: modal_data[1].site,
            text: 'Sporttrace'
        })
        var $git_hub = $('<a>', {
            href: modal_data[1].github,
            text: 'Github Repo'
        })
        $('.modal-images').append($app_img)
        $('#modal-header').append('My Students Grade')
        $('.modal-desc').append(modal_data[1].description)
        $('.modal-git').append($git_hub)
        $('.live-site').append($live_site)
        modal[0].style.display = "block"
        $('body').addClass('modal-open') 
    })

    $('#my_fantasyff').on('click', ()=> {
        for (var i = 0; i < modal_data[2].technologies.length; i++) {
            var $tech_item = $('<li>', {
                text: modal_data[2].technologies[i]
            })
            $('.tech-list').append($tech_item)
        }
        var $app_img = $('<img>', {
                src: modal_data[2].images,
                class: 'modal-img',
            })
        var $live_site = $('<a>', {
            href: modal_data[2].site,
            text: 'myFantasyFF'
        })
        var $git_hub = $('<a>', {
            href: modal_data[2].github,
            text: 'Github Repo'
        })
        $('.modal-images').append($app_img)
        $('#modal-header').append('myFantasyFF')
        $('.modal-desc').append(modal_data[2].description)
        $('.modal-git').append($git_hub)
        $('.live-site').append($live_site)
        modal[0].style.display = "block"
        $('body').addClass('modal-open')
    })

    $('.backdrop').on('click', () => {
        clear_modal()
    })
    $('.close').on('click', () => {
        clear_modal()
    })
    $('.right-scroll-button').on('click', () => {
        var offset = $('.item').offset()
        $('.icons').scrollLeft(offset.left < 0 ? offset.left * -1 + 300 : offset.left + 300)
        offset = $('.icons').offset()
    })
    $('.left-scroll-button').on('click', () => {
        var offset = $('.item').offset()
        $('.icons').scrollLeft(0)
        offset = $('.item').offset()
    })
}


function clear_modal() {
    $('.tech-list').empty()
    $('#modal-header').empty()
    $('.modal-desc').empty()
    $('.modal-git').empty()
    $('.modal-images').empty()
    $('.live-site').empty()
    $('body').css({'overflow:':'visible', 'height':'100%'})
    modal[0].style.display = "none"
    $('body').removeClass('modal-open')
}

var modal_data = [{
    title: 'My Students Grade',
    description: 'My Students Grade is an application developed to allow users to create a profile using their Facebook accounts and then create students, courses, and assignments for recording and tracking student grades.',
    images:  'img/modal/MSG_6.png',
    technologies: ['React', 'Redux', 'Node', 'Express', 'SQL', 'Sequelize', 'HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/cbryant24/my_grade_table',
    site: 'http://gradetable.chrisbryantdev.com'
}, {
    title: 'Sporttrace',
    description: 'Sporttrace is an application developed to allow users to create a profile using their Facebook accounts and then create or join pickup basketball games.',
    images:  'img/modal/SPT_1.png',
    technologies: ['React', 'Redux', 'Node', 'Express', 'SQL', 'Sequelize', 'HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/cbryant24/sporttrace',
    site: 'http://sporttrace.chrisbryantdev.com'
}, {
    title: 'myFantasyFF',
    description: 'myFantasyFF is an application developed to track your favorite NFL Teams, pulling relevant data from NFL Sport Stats, Twitter, and Youtube APIs.',
    images:  'img/modal/myFF_1.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Youtube API', 'Twitter API'],
    github: 'https://github.com/cbryant24/myFantasyFF',
    site: 'http://myfantasyff.chrisbryantdev.com'
}]

// Get the modal
var modal = $('#myModal');

// Get the button that opens the modal
var btn = $("#myBtn");

// Get the <span> element that closes the modal
var span = $(".close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal[0].style.display = "none";
    }
}

