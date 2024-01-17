import ContextProvider from "./components/context-provider/context-provider";

function App() {
  return (
    <ContextProvider>
      <main className="container">
        <div className="advice-box">
          <div className="advice-number-box">
            <p className="advice-number">
              Conseil #<span id="advice-number"></span>
            </p>
          </div>
          <div className="content-advice">
            <p className="advice-text">
              <q id="advice-text"></q>
            </p>
          </div>
          <div className="author-advice">
            <p className="author-name" id="author-name"></p>
          </div>
          <div className="icon-advice">
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div className="next-advice-btn">
            <svg
              className="btn"
              id="next-advice-btn"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </div>

        <div className="attribution text-center">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white underline hover:no-underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/Joe-Itax"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white underline hover:no-underline"
          >
            Joseph Itakala
          </a>
          .
        </div>
      </main>
    </ContextProvider>
  );
}

export default App;
