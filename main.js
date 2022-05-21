
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()


  activateMenuAtCurrentSection(home)
  //activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo v
  const targetLine = scrollY + innerHeight / 2

  //console.log(targetLine) para ver os valores na página

  //verificar se aseção passou da linha *****

  // quais dado vou precisar? 


//console.log(home.offsetTop) 
// console.log(services.offsetTop) mostra o inicio de services 
// é só trocar o que ta antes do ponto.

const sectionTop = section.offsetTop
const sectionHeight = section.offsetHeight

//console.log(sectionHeight) para mostrar o começo do deslocame



// o topo da seção chegou ou ultrapassou a linha alvo
const sectionTopReachOrPassedLineTargetLine = targetLine >= sectionTop



// informações dos dados e da lógica
console.log(' O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedLineTargetLine)




// vamos verificar se a base está abaixo da linha alvo
//quais dados vou precisar?
//console.log(sectionTop)
//console.log(sectionHeight)




//a seção termina onde?
const sectionEndsAt = sectionTop + sectionHeight

//console.log(sectionEndsAt)


// o final da seção passou a linha alvo
const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


console.log('O fundo da seção passou da linha?'),
sectionEndPassendTargetLine



//limite da seção 
const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


if (sectionBoundaries) {
console.log('Estou na seção home')
}

}





function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}


function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}



function openMenu() {
  document.body.classList.add('menu-expanded')
}




function closeMenu() {
  document.body.classList.remove('menu-expanded')
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`)



