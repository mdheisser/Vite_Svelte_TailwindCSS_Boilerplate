<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<Router>
  <div class="m-auto max-w-md w-full overflow-hidden">
    <ul>
      <li>
        <Link to="first">
          <h1 class="text-xl block font-bold py-2 text-gray-400 tracking-widest text-center underline">
            Today I did something cool
          </h1>
        </Link>
      </li>
      <li>
        <Link to="second">
          <h1 class="text-xl block font-bold py-2 text-gray-400 tracking-widest text-center underline">
            I did something awesome today
          </h1>
        </Link>
      </li>
      <li>
        <Link to="third">
          <h1 class="text-xl block font-bold py-2 text-gray-400 tracking-widest text-center underline">
            Did something sweet today
          </h1>
        </Link>
      </li>
    </ul>

    <Route path="first">
      <p class="block font-bold text-gray-400 tracking-widest text-center">
        I did something cool today. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quisquam rerum asperiores, ex animi sunt ipsum. Voluptas 
        sint id hic. Vel neque maxime exercitationem facere culpa nisi, nihil 
        incidunt quo nostrum, beatae dignissimos dolores natus quaerat! Quasi sint 
        praesentium inventore quidem, deserunt atque ipsum similique dolores maiores
        expedita, qui totam. Totam et incidunt assumenda quas explicabo corporis 
        eligendi amet sint ducimus, culpa fugit esse. Tempore dolorum sit 
        perspiciatis corporis molestias nemo, veritatis, asperiores earum! 
        Ex repudiandae aperiam asperiores esse minus veniam sapiente corrupti 
        alias deleniti excepturi saepe explicabo eveniet harum fuga numquam 
        nostrum adipisci pariatur iusto sint, impedit provident repellat quis?
      </p>
    </Route>
    <Route path="second">
      <p class="block font-bold text-gray-400 tracking-widest text-center">
        I did something awesome today. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Repudiandae enim quasi animi, vero deleniti dignissimos 
        sapiente perspiciatis. Veniam, repellendus, maiores.
      </p>
    </Route>
    <Route path="third">
      <p class="block font-bold text-gray-400 tracking-widest text-center">
        I did something sweet today. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Modi ad voluptas rem consequatur commodi minima doloribus 
        veritatis nam, quas, culpa autem repellat saepe quam deleniti maxime delectus 
        fuga totam libero sit neque illo! Sapiente consequatur rem minima expedita 
        nemo blanditiis, aut veritatis alias nostrum vel? Esse molestias placeat, 
        doloribus commodi.
      </p>
    </Route>
  </div>
</Router>