let addToy = false;
document.addEventListener('DOMContentLoaded', () => {
    fetch ('http://localhost:3000/toys')
      .then(resp => resp.json())
      .then(toyArray => {
          toyArray.forEach(toyObj)
      })
     
    function toyObj(toyCard){
        const div = document.createElement('div')
        div.className = 'card'
        document.getElementById('toy-collection').append(div)

        const h2 = document.createElement('h2')
        h2.textContent = toyCard.name
        
        const img = document.createElement('img')
        img.src = toyCard.image
        img.className = 'toy-avatar'
        
        const p = document.createElement('p')
        p.textContent = toyCard.likes
        
        const btn = document.createElement('button')
        btn.textContent = 'Like'
        btn.id = toyCard.id
        btn.className = 'like-btn'

        div.append(h2,img,p,btn)

        btn.addEventListener('click', () => {
          const likes = parseInt(p.textContent) + 1
          console.log(likes)
        })
     }
  
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const form = document.querySelector('.add-toy-form')
  console.log(form)
  form.addEventListener('submit', (e) => {
      e.preventDefault()
      addNewToy(e)
  })

  function addNewToy(e){
      fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(e = {
        "name": e.target.name.value,
        "image": e.target.image.value,
        "likes": '0'
      })
      })
        .then(resp => resp.json())
        .then((newToy) =>{
        console.log(newToy)
      })

}

// function createNewToy(){
  
// }
 

});
