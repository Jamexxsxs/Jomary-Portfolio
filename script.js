const textElement = document.getElementById('text-specialty')

let words = ['Web Developer', 'Software Developer', 'Mobile Developer']
let wordIndex = 0
let charIndex = 0
let isTyping = true
let menu = ['home', 'about', 'skills', 'services', 'contact']
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
      if (count != 0){
        count++
        if(count === 0){
          change_view(0, 0)
        }

        else if(count === -1){
          change_view(65, 1)
        }

        else if(count === -2){
          change_view(99, 2)
        }
      }
    }
    else{
      if (count != -4){
        count--
        if(count === -1){
          change_view(65, 1)
        }

        else if(count === -2){
          change_view(99, 2)
        }

        else if(count === -3){
          change_view(159, 3)
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

  if (select === 1){
    tech_skills.style.transform = 'translateX(0)'
    prof_soft.style.transform = 'translateX(0)'
    skills_button.style.opacity = '1'
    skills_button.style.cursor = 'pointer'
    about_text.style.opacity = '1'
    about_text.style.cursor = 'text'
    my_details.style.transform = 'translateY(0)'
    my_interest.style.transform = 'translateX(0)'
  }
  else if(select === 2){
    tech_skills.style.transform = 'translateX(-35vw)'
    prof_soft.style.transform = 'translateX(-35vw)'
    skills_button.style.opacity = '0'
    skills_button.style.cursor = 'default'
    about_text.style.opacity = '0'
    about_text.style.cursor = 'default'
    my_details.style.transform = 'translateY(-10vw)'
    my_interest.style.transform = 'translate(-28vw, 12vw)'
    services_button.style.opacity = '1'
  }

  else if(select === 3){
    tech_skills.style.transform = 'translateX(-35vw)'
    prof_soft.style.transform = 'translateX(-35vw)'
    services_button.style.opacity = '0'
  }
}