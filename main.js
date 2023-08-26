import './style.css'

const location = window.location.href.split('/?')
const params = new URLSearchParams(location[1])

const JSONData = {
  front: params.get('front'),
  back: params.get('back'),
  operation: params.get('op'),
}

const containOp = ['plus', 'minus', 'mtl', 'divide']

const rtnOp = ['+', '-', 'x', '/']

function calculate(input) {
  let result

  switch (input.operation) {
    case containOp[1]:
      result = Number(input.front) - Number(input.back)
      break

    case containOp[2]:
      result = Number(input.front) * Number(input.back)
      break

    case containOp[3]:
      if (input.back != 0) {
        result = Number(input.front) / Number(input.back)
      } else {
        result = 'Divide by 0'
      }
      break

    default:
      result = Number(input.front) + Number(input.back)
      break
  }

  return result
}

const components = document.querySelector('#app')

if (
  JSONData.front != (null || '') &&
  JSONData.back != (null || '') &&
  JSONData.operation != (null || '')
) {
  components.innerHTML = `<div style="width: 100%; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
  <h1>
    ${JSONData.front} ${rtnOp[containOp.indexOf(JSONData.operation)]} ${
    JSONData.back
  } = ${calculate(JSONData)}
  </h1> 
  <div>
    <form method="get" action="/" style="width: 80%; margin: 0 auto; display: flex; flex-direction: row; gap: 1rem;">
      <input type="text" name="front" style="text-align: center;" value="${JSONData.front}">
      <select name="op" style="text-align: center;">
        <option value="plus">✚</option>
        <option value="minus">−</option>
        <option value="mtl">❌</option>
        <option value="divide">➗</option>
      </select>
      <input type="text" name="back" style="text-align: center;" value="${JSONData.back}">
      <br>
      <button type="submit">
        Submit
      </button>
    </form> 
  </div>
</div>`
} else {
  components.innerHTML = `<div style="width: 100%; min-height: 100vh; display: flex; flex-direction: row; align-items: center; justify-content: center;">
  <div>
    <form method="get" action="/" style="width: 80%; margin: 0 auto; display: flex; flex-direction: row; gap: 1rem;">
      <input type="text" name="front" style="text-align: center;">
      <select name="op" style="text-align: center;">
        <option value="plus">✚</option>
        <option value="minus">−</option>
        <option value="mtl">❌</option>
        <option value="divide">➗</option>
      </select>
      <input type="text" name="back" style="text-align: center;">
      <br>
      <button type="submit">
        Submit
      </button>
    </form> 
  </div>
</div>`
}
