import './index.scss'
import { setupCounter } from './components/counter'

document.querySelector<HTMLDivElement>('#root')!.innerHTML = `
  <div class="underline">
    <h1>hello World</h1>
  </div>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)