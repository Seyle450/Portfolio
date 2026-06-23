const myElements = document.querySelectorAll('.hide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hide');
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

myElements.forEach(element => {
  observer.observe(element);
});
function head1() {
  var element = document.getElementById("header");
  element.classList.add("only_show");

  var element = document.getElementById("menu2");
  element.classList.remove("only_hide");
  element.classList.add("only_show");

  var element = document.getElementById("menu1");
  element.classList.add("only_hide");
  element.classList.remove("only_show");

}
function head2() {
  var element = document.getElementById("header");
  element.classList.remove("only_show");

  var element = document.getElementById("menu1");
  element.classList.remove("only_hide");
  element.classList.add("only_show");

  var element = document.getElementById("menu2");
  element.classList.add("only_hide");
  element.classList.remove("only_show");
  
}

