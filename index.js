import { createBrowserHistory } from "history"

let historyInstance = null

const getHistory = () => {
  if (!(typeof window !== "undefined" && window.document)) {
    return historyInstance
  }
  if (!historyInstance) {
    historyInstance = createBrowserHistory()
  }
  return historyInstance
}
export default getHistory()
