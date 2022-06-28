<script>
  import { count } from '../components/Utils/Store'
  import { v4 } from 'uuid'

  let items = [];
  let itemText;

  count.subscribe(value => items = value);

  const addItem = () => {
    if(!itemText) return
    count.update(items => items = [...items, {
      id: v4(),
      text: itemText,
      done: false
    }])
  }
</script>

<div class="m-auto max-w-md w-full overflow-hidden">
  <h1 class="uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center">
    Tailwind CSS Todos
  </h1>
  <div class="flex items-center justify-between relative">
    <input bind:value="{itemText}" class="p-4 pr-20 border-t-2 border-green-500 rounded bg-gray-900 text-white w-full shadow-inner outline-none" placeholder="Add new item..."/>
    <button on:click={addItem} class="text-green-400 hover:text-green-300 bg-gray-900 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none">
      Add
    </button>
  </div>
</div>