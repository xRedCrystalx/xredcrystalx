

export default async function Blog() {
    return (
      <main className="flex-grow">

        <aside
          className="border float-start w-1/6 min-h-screen mr-3 p-3"
        >
          <h1 >
            Work in progress..
          </h1>

          <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
          </ul>

        </aside>

        <div id="content"
          className="border float-start w-auto h-max mr-3 p-3"
        >
            Work in progress..

        </div>

  
      </main>
    );
  }
  