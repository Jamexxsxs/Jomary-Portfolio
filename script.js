const textElement = document.getElementById('text-specialty')

let words = ['Web Developer', 'Software Developer', 'Mobile Developer']
let wordIndex = 0
let charIndex = 0
let isTyping = true
let menu = ['home', 'about', 'skills', 'contacts']
let count = 0

function typeText() {
    if(wordIndex == 3){
        wordIndex = 0
    }

    const word = words[wordIndex]
    
    if (isTyping) {
      if (charIndex < word.length) {
        textElement.textContent += word.charAt(charIndex)
        charIndex++
        setTimeout(typeText, 100)
      } else {
        isTyping = false
        setTimeout(eraseText, 800)
      }
    } else {
      if (charIndex > 0) {
        textElement.textContent = word.substring(0, charIndex - 1)
        charIndex--
        setTimeout(typeText, 100)
      } else {
        isTyping = true
        wordIndex++
        setTimeout(typeText, 500)
      }
    }
}


function eraseText() {
    if (isTyping) {
      return;
    }
    
    if (charIndex > 0) {
      textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 100);
    } else {
      isTyping = true;
      wordIndex++;
      setTimeout(typeText, 800);
    }
  }
  

typeText()

let wheelTimeout
let incrementing = false
document.addEventListener('wheel', (event) => {
  clearTimeout(wheelTimeout);

  if(!incrementing){
    if (event.deltaY < 0) {
      if (count <= 0){
        count++
        if(count === 1){
          change_view(260, 3)
        }
        else if(count === 0){
          change_view(0, 0)
        }

        else if(count === -1){
          change_view(60, 1)
        }

        else if(count === -2){
          change_view(163.5, 2)
        }
      }
    }
    else{
      if (count >= -4){
        count--
        if(count === -1){
          change_view(60, 1)
        }

        else if(count === -2){
          change_view(163.5, 2)
        }

        else if(count === -3){
          change_view(260, 3)
        }

        else if(count === -3){
          change_view(260, 3)
        }
        else if(count === -4){
          change_view(0, 0)
        }
      }
    }
    incrementing = true
  }

  wheelTimeout = setTimeout(function() {
    incrementing = false
}, 200);
})

function change_view(view, select){
  const my_interest = document.getElementById('my-interest')
  const skills_button = document.getElementById('my-skills-button')
  const about_text = document.getElementById('about-text')
  const my_details = document.getElementById('my-details')
  const tech_skills = document.getElementById('tech-skills')
  const prof_soft = document.getElementById('prof-soft')
  const services_button = document.getElementById('my-services-button')

  let option_a = null
  const change = document.getElementById('content')
  change.style.transform = `translateX(-${view}vw)`

  count = 0-select


  menu.forEach(function(element){
    if(element === menu[select]){
      
      option_a = document.getElementById(element + '-a')
      option_a.style.color = '#f82e54'
      option_a.style.fontWeight = '800'
    }
    else{
      option_a = document.getElementById(element + '-a')
      option_a.style.color = '#f8f8f8'
      option_a.style.fontWeight = '400'
    }
  })
}

const mp3 = document.getElementById('mp3')
mp3.play();