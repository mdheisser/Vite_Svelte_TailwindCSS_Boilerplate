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

  const itemClick = (id, e) => {
    count.update(items => items = items.map(item => {
      if(item.id === id){
        item.done = !item.done;
        return item;
      }
      else{
        return item;
      }
    }))
  }

</script>

<div class="m-auto max-w-md w-full overflow-hidden">
  <h1 class="uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center">
    Tailwind CSS Todos
  </h1>
  <form on:submit|preventDefault={addItem} class="flex items-center justify-between relative">
    <input bind:value="{itemText}" class="p-4 pr-20 rounded bg-gray-900 text-white w-full shadow-inner outline-none" placeholder="Add new item..."/>
    <input  value="Add" type="submit" class="text-green-400 hover:text-green-300 bg-gray-900 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none active:text-green-200" />
  </form>
  <ul class="m-0 my-4 p-0 list-none w-full">
    {#each items as item}
      <li class="flex items-center justify-between todoItem {item.done ? "active" :""}">
        <p class="transition-all duration-200 ease-in-out delay-0 {item.done ? "active" :""} hover:pl-2 pr-2 " on:click={itemClick.bind(this, item.id)}>{item.text}</p>
        <div class="flex items-center h-full justify-end icon hover:text-gray-400 active:text-white">
          <i class="fa-solid fa-trash"></i>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .todoItem {
    border-left-width: 4px;
    cursor: pointer;
    padding: 1rem;
    margin: 0px 0px 0.25rem;
    color: rgb(113, 128, 150);
    border-color: rgb(104, 211, 145);
  }
  .todoItem.active {    
    border-color: rgb(237, 137, 54);
  }
  p.active {
    text-decoration: line-through;
  }
</style>