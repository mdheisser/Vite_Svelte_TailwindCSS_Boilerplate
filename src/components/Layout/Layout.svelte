<script>
import NavLink from '../NavLink.svelte'
</script>

<nav class='flex w-full justify-center'>
  <div class='flex justify-around items-center w-96 h-12 text-xl font-mono font-bold text-gray-400 bg-gray-900 border-green-500 rounded shadow-inner outline-none border-t-2'>
    <NavLink to='/'><p>Home</p></NavLink>
    <NavLink to='about'><p>About</p></NavLink>
    <NavLink to='blog'><p>Blog</p></NavLink>
  </div>
</nav>