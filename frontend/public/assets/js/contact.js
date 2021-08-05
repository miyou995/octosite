
// The following function are copying from  : get csrf token
// https://docs.djangoproject.com/en/dev/ref/csrf/#ajax

const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const send_message = (data) => {
    let csrftoken = getCookie('csrftoken')
    //console.log('data', data)
     // url 
    const url = `${window.location.protocol}//backend.octopus-consulting.com/api/contact/contacter/`
    //console.log(csrftoken)
    return fetch(url, {
        method: 'POST',
        headers : { 
            'Accept': 'application/json',
            "X-CSRFToken": csrftoken
           },
        
        credentials: 'same-origin',

        
        body: JSON.stringify({'data': data })
    } )
    .then(response => response.json())
    .then(data => {
        return data
    })

}


export const ask_subscription = (data) => {
    let csrftoken = getCookie('csrftoken')
    //console.log('data', data)
     // url 
    const url = `${window.location.protocol}//backend.octopus-consulting.com/api/contact/demander-abonnement/`
    //console.log(csrftoken)
    return fetch(url, {
        method: 'POST',
        headers : { 
            'Accept': 'application/json',
            "X-CSRFToken": csrftoken
           },
        
        credentials: 'same-origin',

        
        body: JSON.stringify({'data': data })
    } )
    .then(response => response.json())
    .then(data => {
        return data
    })

}


export const ask_demo = (data) => {
    let csrftoken = getCookie('csrftoken')
    //console.log('data', data)
     // url 
    const url = `${window.location.protocol}//backend.octopus-consulting.com/api/contact/demander-demo/`
    //console.log(csrftoken)
    return fetch(url, {
        method: 'POST',
        headers : { 
            'Accept': 'application/json',
            "X-CSRFToken": csrftoken
           },
        
        credentials: 'same-origin',

        
        body: JSON.stringify({'data': data })
    } )
    .then(response => response.json())
    .then(data => {
        return data
    })

}