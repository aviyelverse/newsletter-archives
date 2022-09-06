import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <p className="text-sm text-gray-600 mb-4">
            Sign-up to Aviyel to get the freshly brewed newsletter to your inbox.
            </p>
            <div className="flex flex-grow mb-6">
            <ul className="flex flex-grow justify-start flex-wrap items-center">
              <li>
                <a
                  href="http://aviyel.com/#login"
                  target="_blank"
                  className="btn-sm text-white bg-purple-300 hover:bg-purple-600 ml-3  rounded"
                  rel="noopener noreferrer"
                >
                  <span>Subscribe to our Newsletter</span>
                  <svg
                    className="w-3 h-3 fill-current text-purple-600 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          </div>
          
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t-2 border-solid">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  to={{ pathname: "https://bit.ly/3KvdP5j" }} 
                  target="_blank"
                  className="flex justify-center items-center text-blue-400 hover:text-gray-900 bg-blue-100 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-12 h-8 fill-current "
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                   to={{ pathname: "https://bit.ly/3e1oJDP" }} 
                   target="_blank"
                  className="flex justify-center items-center text-white hover:text-gray-900 bg-discordcolor-100 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Discord"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-12 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M 12.65625 4.90625 L 11.875 5 C 11.875 5 8.371094 5.382813 5.8125 7.4375 L 5.78125 7.4375 L 5.75 7.46875 C 5.175781 7.996094 4.925781 8.644531 4.53125 9.59375 C 4.136719 10.542969 3.714844 11.753906 3.34375 13.09375 C 2.601563 15.777344 2 19.027344 2 22 L 2 22.25 L 2.125 22.5 C 3.050781 24.125 4.695313 25.160156 6.21875 25.875 C 7.742188 26.589844 9.058594 26.96875 9.96875 27 L 10.5625 27.03125 L 10.875 26.5 L 11.96875 24.5625 C 13.128906 24.824219 14.464844 25 16 25 C 17.535156 25 18.871094 24.824219 20.03125 24.5625 L 21.125 26.5 L 21.4375 27.03125 L 22.03125 27 C 22.941406 26.96875 24.257813 26.589844 25.78125 25.875 C 27.304688 25.160156 28.949219 24.125 29.875 22.5 L 30 22.25 L 30 22 C 30 19.027344 29.398438 15.777344 28.65625 13.09375 C 28.285156 11.753906 27.863281 10.542969 27.46875 9.59375 C 27.074219 8.644531 26.824219 7.996094 26.25 7.46875 L 26.21875 7.4375 L 26.1875 7.4375 C 23.628906 5.382813 20.125 5 20.125 5 L 19.34375 4.90625 L 19.0625 5.625 C 19.0625 5.625 18.773438 6.355469 18.59375 7.1875 C 17.460938 7.035156 16.535156 7 16 7 C 15.464844 7 14.539063 7.035156 13.40625 7.1875 C 13.226563 6.355469 12.9375 5.625 12.9375 5.625 Z M 11.28125 7.1875 C 11.324219 7.328125 11.367188 7.449219 11.40625 7.5625 C 10.113281 7.882813 8.734375 8.371094 7.46875 9.15625 L 8.53125 10.84375 C 11.125 9.234375 14.851563 9 16 9 C 17.148438 9 20.875 9.234375 23.46875 10.84375 L 24.53125 9.15625 C 23.265625 8.371094 21.886719 7.882813 20.59375 7.5625 C 20.632813 7.449219 20.675781 7.328125 20.71875 7.1875 C 21.652344 7.375 23.433594 7.804688 24.90625 8.96875 C 24.898438 8.972656 25.28125 9.550781 25.625 10.375 C 25.976563 11.222656 26.367188 12.351563 26.71875 13.625 C 27.394531 16.066406 27.925781 19.039063 27.96875 21.65625 C 27.339844 22.617188 26.171875 23.484375 24.9375 24.0625 C 23.859375 24.566406 23.007813 24.75 22.5 24.84375 L 22 24 C 22.296875 23.890625 22.589844 23.769531 22.84375 23.65625 C 24.382813 22.980469 25.21875 22.25 25.21875 22.25 L 23.90625 20.75 C 23.90625 20.75 23.34375 21.265625 22.03125 21.84375 C 20.71875 22.421875 18.714844 23 16 23 C 13.285156 23 11.28125 22.421875 9.96875 21.84375 C 8.65625 21.265625 8.09375 20.75 8.09375 20.75 L 6.78125 22.25 C 6.78125 22.25 7.617188 22.980469 9.15625 23.65625 C 9.410156 23.769531 9.703125 23.890625 10 24 L 9.5 24.84375 C 8.992188 24.75 8.140625 24.566406 7.0625 24.0625 C 5.828125 23.484375 4.660156 22.617188 4.03125 21.65625 C 4.074219 19.039063 4.605469 16.066406 5.28125 13.625 C 5.632813 12.351563 6.023438 11.222656 6.375 10.375 C 6.71875 9.550781 7.101563 8.972656 7.09375 8.96875 C 8.566406 7.804688 10.347656 7.375 11.28125 7.1875 Z M 12.5 14 C 11.726563 14 11.042969 14.441406 10.625 15 C 10.207031 15.558594 10 16.246094 10 17 C 10 17.753906 10.207031 18.441406 10.625 19 C 11.042969 19.558594 11.726563 20 12.5 20 C 13.273438 20 13.957031 19.558594 14.375 19 C 14.792969 18.441406 15 17.753906 15 17 C 15 16.246094 14.792969 15.558594 14.375 15 C 13.957031 14.441406 13.273438 14 12.5 14 Z M 19.5 14 C 18.726563 14 18.042969 14.441406 17.625 15 C 17.207031 15.558594 17 16.246094 17 17 C 17 17.753906 17.207031 18.441406 17.625 19 C 18.042969 19.558594 18.726563 20 19.5 20 C 20.273438 20 20.957031 19.558594 21.375 19 C 21.792969 18.441406 22 17.753906 22 17 C 22 16.246094 21.792969 15.558594 21.375 15 C 20.957031 14.441406 20.273438 14 19.5 14 Z M 12.5 16 C 12.554688 16 12.625 16.019531 12.75 16.1875 C 12.875 16.355469 13 16.648438 13 17 C 13 17.351563 12.875 17.644531 12.75 17.8125 C 12.625 17.980469 12.554688 18 12.5 18 C 12.445313 18 12.375 17.980469 12.25 17.8125 C 12.125 17.644531 12 17.351563 12 17 C 12 16.648438 12.125 16.355469 12.25 16.1875 C 12.375 16.019531 12.445313 16 12.5 16 Z M 19.5 16 C 19.554688 16 19.625 16.019531 19.75 16.1875 C 19.875 16.355469 20 16.648438 20 17 C 20 17.351563 19.875 17.644531 19.75 17.8125 C 19.625 17.980469 19.554688 18 19.5 18 C 19.445313 18 19.375 17.980469 19.25 17.8125 C 19.125 17.644531 19 17.351563 19 17 C 19 16.648438 19.125 16.355469 19.25 16.1875 C 19.375 16.019531 19.445313 16 19.5 16 Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                   to={{ pathname: "https://bit.ly/3dZPJn3" }} 
                   target="_blank"
                  className="flex justify-center items-center text-white hover:text-gray-900 bg-black hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Github"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-12 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <div className="flex-shrink-0 mr-4">
              <Link to="/" className="block" aria-label="Aviyel Newsletter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="115"
                  height="30"
                  fill="none"
                  viewBox="0 0 115 30"
                >
                  <path
                    fill="#30293D"
                    d="M103.389 7.385v14.246a.177.177 0 00.177.177h10.259a.177.177 0 00.177-.177v-2.325a.177.177 0 00-.177-.177h-7.575V7.385a.17.17 0 00-.109-.161.153.153 0 00-.067-.012h-2.508a.17.17 0 00-.067.012.169.169 0 00-.096.094.171.171 0 00-.014.067zm-4.349 1.92a6.99 6.99 0 00-5.304-2.325c-4.326 0-7.453 3.521-7.453 7.58a7.628 7.628 0 002.282 5.403 7.623 7.623 0 005.442 2.182 7.854 7.854 0 006.189-2.794l.381-.45a.193.193 0 00.034-.067.19.19 0 00-.023-.145.187.187 0 00-.053-.052l-2.15-1.304a.174.174 0 00-.222.035l-.305.347a4.91 4.91 0 01-3.851 1.649 4.81 4.81 0 01-4.655-3.403h11.395a.175.175 0 00.176-.167l.028-.492c.111-2.437-.599-4.516-1.912-5.997zm-9.938 6.475v.046c.01-.018.004-.032 0-.046zm.218-2.613a4.51 4.51 0 014.416-3.428c1.968 0 3.634 1.3 4.157 3.428H89.32zM78.254 24.803L85.573 7.52a.177.177 0 00-.163-.245h-2.698a.168.168 0 00-.098.028.163.163 0 00-.065.079l-4.004 9.435-4.343-9.425a.182.182 0 00-.16-.105h-2.715a.19.19 0 00-.149.084.172.172 0 00-.02.083c0 .03.006.058.02.083l5.888 12.826-1.829 4.319a.184.184 0 00.017.164.175.175 0 00.064.057.167.167 0 00.082.021h2.695a.174.174 0 00.159-.121zm-9.417-2.995a.172.172 0 00.124-.052.173.173 0 00.052-.125V7.465a.177.177 0 00-.176-.177H66.3a.177.177 0 00-.177.177V21.63c0 .047.02.092.052.125a.173.173 0 00.125.052h2.535zM51.955 7.288H49.53a.167.167 0 00-.145.08.16.16 0 00-.03.079.175.175 0 00.013.084L55.22 21.7a.177.177 0 00.163.108h2.255a.174.174 0 00.162-.108l6.17-14.18a.177.177 0 00.021-.084.159.159 0 00-.022-.083.17.17 0 00-.145-.08h-2.737a.175.175 0 00-.159.107l-4.402 10.157-4.41-10.143a.179.179 0 00-.162-.108zm-5.244 1.213c-1.04-1.009-2.47-1.522-4.156-1.522a8.175 8.175 0 00-5.508 2.111l-.498.416a.183.183 0 00-.063.139.173.173 0 00.073.135l2.01 1.484a.184.184 0 00.21 0l.326-.243c.883-.645 1.856-1.283 3.464-1.283 1.174 0 1.839.375 2.234.85.43.587.646 1.304.61 2.03v.16c-1.857 0-4.102 0-5.913.517a5.503 5.503 0 00-2.539 1.386 3.966 3.966 0 00-1.067 2.86c0 2.773 2.463 4.603 5.462 4.603 1.46.04 2.89-.42 4.056-1.3v.787a.177.177 0 00.177.177h2.507a.177.177 0 00.177-.177V12.62c-.003-1.685-.537-3.11-1.562-4.118zm-1.302 8.53c-.326.836-1.455 2.326-4.056 2.326a3.306 3.306 0 01-1.819-.492 1.525 1.525 0 01-.727-1.324 1.395 1.395 0 01.491-1.14 3.46 3.46 0 011.542-.624 21.41 21.41 0 014.032-.215h.537v1.47z"
                  />
                  <path
                    fill="#8661D1"
                    fill-rule="evenodd"
                    d="M15.803 2.358a1.52 1.52 0 00-1.712 0L6.276 7.662l-.062.045-1.705 1.156a1.584 1.584 0 00-.529 1.299 1.592 1.592 0 00.702 1.212l3.214 2.116 5.05-3.43a3.551 3.551 0 014.002-.001l3.924 2.667V5.8l-5.069-3.441zm4.252 12.332l-4.248-2.882a1.52 1.52 0 00-1.712 0l-4.31 2.923 4.292 2.826a1.518 1.518 0 001.712 0l4.1-2.782.166-.085zm2.882-.37c.352.104.686.261.99.466l5.522 3.753a1.051 1.051 0 01.46.874v9.447a1.05 1.05 0 01-.545.926 1.023 1.023 0 01-1.06-.052l-5.521-3.753a1.531 1.531 0 00-1.716 0l-4.115 2.782a3.558 3.558 0 01-4.001 0l-11.34-7.698A3.666 3.666 0 01.426 19.74a3.698 3.698 0 01-.427-1.731v-6.642a3.7 3.7 0 011.605-3.056l1.679-1.138c.08-.066.165-.13.254-.189l1.535-1.03 7.875-5.34a3.54 3.54 0 013.986-.001l5.522 3.752a1.053 1.053 0 01.457.875l.025 9.08zm-20.86-3.168a1.286 1.286 0 000 .215v6.642a1.562 1.562 0 00.688 1.308l11.33 7.72a1.52 1.52 0 001.712 0l4.1-2.782a3.558 3.558 0 014.002 0l3.928 2.667v-6.95l-5.073-3.441a1.525 1.525 0 00-1.715 0l-4.097 2.782a3.553 3.553 0 01-3.994 0l-9.395-6.175a3.62 3.62 0 01-1.487-1.986z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
