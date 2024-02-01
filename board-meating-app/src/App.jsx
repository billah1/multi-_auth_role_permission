

function App() {

  return (
    <div className="max-w-6xl mx-auto">
        <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
            <div
                className="container mx-auto flex flex-wrap items-center justify-between"
                bis_skin_checked="1"
            >
                <a href="https://laraveller.com/" className="flex items-center">
                    Laraveller
                </a>

                <div
                    className="hidden w-full md:block md:w-auto"

                >
                    <ul
                        class="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
                    >
                        <link>
                            <link
                            to="/"
                            className="block rounded py-2 pr-4 pl-3 text-white"
                            aria-current="page"
                        >Home</link>
                        >
                    </li>
                    <template v-if="!authStore.user">
                        <li>
                            <router-link
                            to="/login"
                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                        >Login</router-link
                        >
                    </li>
                    <li>
                        <router-link
                        to="/register"
                        className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                  md:border-0
                "
                    >Register</router-link
                    >
                </li>
            </template>

        </template>
    </ul>
</div>
</div>
</nav>
    </div>
  )
}

export default App
