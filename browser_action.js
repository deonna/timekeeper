const click = (e) => {
  console.log('something was clicked!')
  console.log(e)
  //change indicator
  toggleTimingIndicator(e.currentTarget)
  //change Timekeeper

  //change total

  //save state upon next open?

  //auth with github
}

const toggleTimingIndicator = (element) => {
  const timingIndicator = element.children[0]

  isTimerStarted() ? $(timingIndicator).removeClass('on') : $(timingIndicator).addClass('on')
}

const isTimerStarted = () => (0 !== document.getElementsByClassName('on').length)

const addClickHandler = (element) => {
  $(element).on('click', click)
}

$(document).on('DOMContentLoaded', () => {
  const categories = document.getElementsByClassName('category')
  R.map(addClickHandler, categories)
})
