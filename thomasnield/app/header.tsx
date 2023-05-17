export function Header() {
    return (
      <main>
        <div className="mb-30 grid grid-cols-2 text-center lg:mb-0 lg:text-left justify-between p-2 bg-gradient-to-r from-cyan-400 to-blue-500">
          <div className="flex flex-col">
            
            <h2 className={`text-7xl font-extrabold`}>
            Thomas Nield{' '}
            </h2>

            <h3 className={`mb-3 text-5xl font-light italic`}>
              Full Stack Software Engineer
            </h3>
          </div>
          <div className="flex flex-row items-center">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Education{' '}
              </h2>
            </a>
  
            <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Experience{' '}
              </h2>
            </a>
  
            <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold text-center`}>
                Resume{' '}
              </h2>
            </a>
  
            <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Contact Me{' '}
              </h2>
            </a>
          </div>
          </div>
        </div>
        
      </main>
    )
  }
  