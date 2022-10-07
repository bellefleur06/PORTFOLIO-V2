let navbar = document.querySelector('#navbar');

window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// AoS
AOS.init({
  duration: 800,
});

//Contact Form

function Mail(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  
  Email.send({
    SecureToken: "79a570fe-2676-4e0d-8efe-a9d5dc8eea53",
    To : 'pbandola06@gmail.com',
    From : "pbandola06@gmail.com",
    Subject : "Email From Portfolio Contact Form",
    Body : "Name: " + name + "<br/><br/> Email: " + email + "<br/><br/> Phone: " + phone + "<br/><br/> Subject: " + subject + "<br/><br/> Message: " + message
  }).then(
    message => alert("Thank you for sending your message. I will get back to you as soon as possible.")
  );
}