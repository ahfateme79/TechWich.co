function loadNotifications(sessionKey) {
    var settings = {
        "url": "https://techwich.co/api/user/all_notifications",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "languageKey": "en",
            "sessionKey": sessionKey,
        },
    };

    $.ajax(settings).done(function (response) {

        let notification_ul = document.getElementById("notification_ul");

        // notf_list = JSON.parse(response);


        for (var i = 0; i < response.length; i++) {

            var li = document.createElement("li");
            var a_child = document.createElement("a");
            var div_child = document.createElement("div");
            var img_child = document.createElement("img");

            img_child.src = response[i].icon.replace("/media/", "https://techwich.co/media/");
            div_child.appendChild(img_child);

            div_child.appendChild(document.createTextNode(response[i].title));
            div_child.classList.add("d-flex");
            div_child.classList.add("align-items-center");


            a_child.classList.add("dropdown-item");
            a_child.appendChild(div_child);
            li.appendChild(a_child);

            if (!response[i].read) {
                li.classList.add("unread-message");
            }

            notification_ul.appendChild(li);
        }
        // document.getElementById("notification_btn").style.display = "block";
        console.log(response);
    });
}