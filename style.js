const buildContainer = (domain, status) => {
  const container = document.createElement("div");
  container.className = 'container';
  document.body.appendChild(container);
  const header = document.createElement('h1');
  const description = document.createElement('p');

  container.appendChild(header);
  container.appendChild(description);
  
  if(status == 401) {
    header.textContent = 'Unauthorized';
    description.textContent = 'Your request is unauthorized';
  } else if(status == 403) {
    header.textContent = 'Forbidden';
    description.textContent = 'Your request is forbidden';
  } else if(status == 404) {
    header.textContent = 'Not Found';
    description.textContent = 'Resource not found';
  } else if(status == 406) {
    header.textContent = 'Not Acceptable';
    description.textContent = 'Your request is blocked';
  } else if(status >= 500 && status < 600) {
    header.textContent = 'Internal Error';
    description.textContent = 'We will be back soon';
  } else {
    header.textContent = 'Unknown error';
    description.textContent = 'Oops';
  }
};


const domain = window.location.hostname;
const status = parseInt(document.getElementById('root').getAttribute('status'), 10);
buildContainer(domain, status);
