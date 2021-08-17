const nodeH1 = document.getElementById('judul')

nodeH1.style.color = 'red'
nodeH1.style.background = 'grey'
nodeH1.innerHTML = 'bootcamp dojobox'

const paragraph = document.getElementsByTagName('p')


for (let index = 0; index < paragraph.length-1; index++) {
    paragraph[index].style.background = 'yellow'
    
}

const h1 = getElementsByTagName('h1')

h1[0].style.fontSize = '50px'

const p4 = document.querySelector('#b p')

p4.style.fontFamily = 'calibri'

const sectionB = document.getElementById('b')

const p = sectionB.querySelector('p')

const pP = document.querySelectorAll('p')

pP[2].innerHTML = 'Ini dirubah jadi JS'