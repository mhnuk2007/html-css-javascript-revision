    const main = document.querySelector(".maincontent");
    const content = `This is some content that will be added to the page.`;
    const newElement = document.createElement("p");
    newElement.classList.add("new-element");
    newElement.setAttribute("id", "new-element");
    newElement.innerHTML = content;
    main.append(newElement);

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;


function createNavMenu(document) {
      // Your code goes here
      const header = document.querySelector(".siteheader");
      const nav = document.createElement("nav");
      nav.classList.add("main-navigation");

      const ul = document.createElement("ul");
      ul.innerHTML = navContent;

      nav.append(ul);
      header.append(nav);

}

createNavMenu(document);
