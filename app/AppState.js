import { Notes } from './models/Notes.js'
import { formTemp } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  FormTemp = [
    new formTemp({
      form: 'form',
    })
  ]

  Notes = [
    new Notes({
      name: 'To do list',
      date: '10/02/2023',
      color: 'blue',
      body: 'How much wood could a woodchuck chuck if a woodchuck could chuck wood',
      updateTime: '12/04/2023',
      number: 1,
    }),
    new Notes({
      name: 'Grocery List',
      date: '10/04/2023',
      color: 'green',
      body: 'Pears, Milk, Oranges, Grapes, Cheese, Juice, Apples, Pasts, Doritos, Ice, Cat Food',
      updateTime: '12/07/2023',
      number: 2,
    })
  ]
  

/**@type {Notes} */
  ActiveNote = null
  /**@type {Notes} */
  listNumbers = null
}

export const AppState = createObservableProxy(new ObservableAppState())