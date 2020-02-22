function toggleInputState(input) {
  if (input.hasAttribute('disabled')) {
    input.removeAttribute('disabled');
  } else {
    input.setAttribute('disabled', true);
  }
}

export default toggleInputState;