import { useContext, useState, useEffect } from "react";

import globalContext from "../../contexts/global-context";

export default function Advices() {
  const advices = useContext(globalContext);
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    if (advices.length > 0) {
      setRandomNum(Math.floor(Math.random() * advices.length));
    }
  }, [advices]);

  function handleClick() {
    setRandomNum(Math.floor(Math.random() * advices.length));
  }
  return (
    <main className="container p-4 sm:p-[unset] flex justify-center items-center flex-col">
      {advices.length > 0 ? (
        <div className="advice-box relative flex flex-col justify-center items-center text-center gap-4 mb-12 p-4 rounded-[0.8rem] w-full px-2 py-4 sm:w-[30rem]">
          <div className="advice-number-box">
            <p className="advice-number text-xl font-extrabold uppercase tracking-[3.50px]">
              Conseil #<span id="advice-number">{advices[randomNum].id}</span>
            </p>
          </div>
          <div className="content-advice">
            <p className="advice-text text-[1.6rem] font-extrabold">
              <q id="advice-text">{advices[randomNum]?.description}</q>
            </p>
          </div>
          <div className="author-advice">
            <p
              className="author-name italic text-[1.15rem] font-semibold"
              id="author-name"
            >
              {advices[randomNum]?.author}
            </p>
          </div>
          <div className="icon-advice mb-12">
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
          <div
            className="next-advice-btn absolute w-16 h-16 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] rounded-[50%] left-2/4 top-full hover:shadow-[0_0_10px_rgba(83,255,171,0.6),0_0_20px_rgba(83,255,171,0.8)]"
            onClick={handleClick}
          >
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
      ) : (
        <div className="">
          <p className="text-xl text-white mb-8 text-center">Chargement ...</p>
        </div>
      )}

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
  );
}
