import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(255, 255, 255, 0.9)")
      : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50">
      <div className="bg-black h-[50px] w-screen ">
        <div className="container max-w-5xl flex justify-between mx-auto">
          <div className="py-4 ml-2">
            <a
              href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=next-website"
              rel="noopener noreferrer"
              target="_blank"
              title="Go to the Vercel website"
              className="jsx-3a64d1ae4f0f7fab"
            >
              <svg
                fill="none"
                height="20"
                viewBox="0 0 283 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
          </div>
          <div className="text-white text-[17px] flex gap-2 py-3">
            <div>Deploy</div>
            <div className="font-bold">Next.js</div>
            <div> on Vercel →</div>
          </div>
        </div>
      </div>
      <div
        className="h-[80px] w-screen grid content-center"
        style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}
      >
        <div className="container max-w-5xl  mx-auto ">
          <div className="flex justify-between ">
            <div className="w-20 mt-4 ml-2 ">
              <svg
                aria-labelledby="conf-logo-title-conf-takeover-logo"
                fill="none"
                role="img"
                viewBox="0 0 170 26"
                width="150%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M108.262 25.9669C108.032 25.9669 107.836 25.8884 107.672 25.7313C107.508 25.5742 107.427 25.3841 107.43 25.1588C107.427 24.9397 107.508 24.7516 107.672 24.5945C107.836 24.4374 108.032 24.3589 108.262 24.3589C108.483 24.3589 108.677 24.4374 108.841 24.5945C109.007 24.7516 109.09 24.9397 109.092 25.1588C109.09 25.3076 109.052 25.444 108.975 25.566C108.896 25.69 108.796 25.7871 108.671 25.8574C108.547 25.9297 108.411 25.9669 108.262 25.9669Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M113.624 18.3689H115.016V23.654C115.014 24.1398 114.907 24.5552 114.699 24.9045C114.488 25.2538 114.196 25.5205 113.822 25.7086C113.449 25.8946 113.013 25.9897 112.517 25.9897C112.064 25.9897 111.657 25.9091 111.295 25.752C110.933 25.5949 110.646 25.3593 110.435 25.0492C110.222 24.7392 110.118 24.3527 110.118 23.8897H111.512C111.514 24.0922 111.561 24.2679 111.651 24.4147C111.74 24.5614 111.864 24.673 112.021 24.7516C112.181 24.8301 112.364 24.8694 112.57 24.8694C112.794 24.8694 112.985 24.8239 113.141 24.7309C113.296 24.64 113.415 24.5035 113.498 24.3217C113.579 24.1418 113.622 23.9186 113.624 23.654V18.3689Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M120.744 20.4358C120.71 20.1155 120.561 19.8654 120.301 19.6876C120.039 19.5078 119.701 19.4189 119.286 19.4189C118.994 19.4189 118.743 19.4623 118.535 19.5471C118.326 19.6339 118.164 19.7496 118.053 19.8964C117.943 20.0431 117.887 20.2106 117.883 20.3986C117.883 20.5557 117.921 20.6921 117.996 20.8058C118.07 20.9216 118.171 21.0187 118.3 21.0973C118.428 21.1779 118.571 21.244 118.726 21.2977C118.884 21.3515 119.041 21.397 119.199 21.4342L119.925 21.6099C120.216 21.676 120.499 21.7649 120.77 21.8786C121.04 21.9902 121.285 22.1328 121.5 22.3043C121.715 22.4759 121.885 22.6826 122.011 22.9244C122.136 23.1662 122.2 23.4494 122.2 23.776C122.2 24.2162 122.085 24.6028 121.853 24.9376C121.621 25.2704 121.287 25.5308 120.848 25.7189C120.412 25.9049 119.884 26 119.263 26C118.662 26 118.139 25.9091 117.698 25.7272C117.255 25.5474 116.91 25.2828 116.661 24.9355C116.412 24.5883 116.278 24.1646 116.259 23.6664H117.638C117.658 23.9269 117.743 24.1439 117.887 24.3196C118.034 24.4932 118.226 24.6214 118.46 24.7082C118.696 24.7929 118.96 24.8363 119.252 24.8363C119.556 24.8363 119.824 24.7908 120.056 24.702C120.286 24.6131 120.467 24.4891 120.597 24.3279C120.729 24.1687 120.795 23.9806 120.797 23.7657C120.795 23.5693 120.736 23.406 120.621 23.2779C120.504 23.1497 120.342 23.0422 120.135 22.9554C119.927 22.8686 119.684 22.7901 119.407 22.7219L118.526 22.5028C117.89 22.3436 117.385 22.1018 117.017 21.7773C116.646 21.4528 116.463 21.0229 116.463 20.4834C116.463 20.0411 116.587 19.6525 116.836 19.3197C117.083 18.9869 117.421 18.7286 117.849 18.5446C118.279 18.3586 118.764 18.2676 119.305 18.2676C119.854 18.2676 120.335 18.3586 120.75 18.5446C121.165 18.7286 121.491 18.9849 121.727 19.3114C121.964 19.638 122.087 20.0121 122.094 20.4358H120.744Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M85.1237 0.0107485H107.428V4.1275H98.5798V25.7852H94.1559V4.1275H85.1237V0.0107485Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M48.4419 0.0107485V4.1275H30.5637V10.7501H44.9415V14.8668H30.5637V21.6684H48.4419V25.7852H26.1397V4.1275H26.1379V0.0107485H48.4419Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M59.5792 0.0214983H53.7893L74.5265 25.7959H80.3329L69.9632 12.9176L80.3163 0.0411626L74.5265 0.0501099L67.0645 9.31767L59.5792 0.0214983Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M65.5201 18.4323L62.6206 14.8275L53.7727 25.8156H59.5791L65.5201 18.4323Z"
                  fill="currentColor"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M26.2948 25.7852L5.52992 0H0V25.7744H4.42393V5.50928L20.7372 25.7852H26.2948Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              {/* <img
                className="w-20"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              ></img> */}
            </div>

            <div className="my-auto p-2 text-[#696969]">
              <button>
                <Link href="/Showcase">
                  <a>Showcase!</a>
                </Link>
              </button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button>Docs</button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button>Blog</button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button>Analytics</button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button>Examples</button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button>Enterprise</button>
            </div>
            <div className="my-auto p-2 text-[#696969]">
              <button className="py-1 px-4 bg-white rounded-lg border border-white hover:border-black">
                Feedback
              </button>
            </div>
            <div className="my-auto">
              <button className="py-1 px-4 bg-blue-600 rounded-lg border border-blue-500 text-gray-50 hover:bg-transparent hover:text-blue-400">
                Learn
              </button>
            </div>
            <IconContext.Provider
              value={{ color: "rgb(105,105,105)", size: "1.5rem" }}
            >
              <div className="my-auto">
                <AiFillGithub />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
