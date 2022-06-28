<script>
  import { Router, Route } from 'svelte-routing'
  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'
  import Blog from './routes/Blog.svelte'
  import Layout from './components/Layout'

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = '';
</script>
<div class="p-8 sm:p-16 w-full h-screen text-white bg-gray-800">
  <Router url='{url}'>
    <Layout />
    <div>
      <Route path='about' component='{About}' />
      <Route path='blog/*' component='{Blog}' />
      <Route path='/' component='{Home}' />
    </div>
  </Router>
</div>