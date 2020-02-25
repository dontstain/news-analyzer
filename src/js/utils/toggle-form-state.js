function toggleFormState(form) {
  form.elements.forEach(element => {
    element.toggleAttribute('disabled');
  })
}

export default toggleFormState;