console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Send')

        var name = $('.name').val()
        var email = $('.email').val()
        var title = $('.title').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length > 4) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            statusElm.append('<div>Name is not valid</div>')
        }  
        
        if(email.length > 5 && email.includes('@') && email.includes('.') && email.includes('com')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            statusElm.append('<div>Email is not valid</div>')
        }

        if(title.length > 4) {
            statusElm.append('<div>Title is valid</div>')
        } else {
            statusElm.append('<div>Title is not valid</div>')
        }

        if(message.length > 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            statusElm.append('<div>Message is not valid</div>')
        }
    })
  }) 