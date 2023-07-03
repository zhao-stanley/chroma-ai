import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function KeyPanel({ openKeypanel, setOpenKeypanel }) {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  function saveApiKey(e, apiKey) {
    e.preventDefault();
    localStorage.setItem("openai_api_key", apiKey);
    setOpenKeypanel(false);
  }

  function removeApiKey(e) {
    e.preventDefault();
    localStorage.removeItem("openai_api_key");
    setOpenKeypanel(false);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("openai_api_key")) {
        setApiKey(window.localStorage.getItem("openai_api_key"));
      }
    }
  }, [openKeypanel]);

  return (
    <>
      <Transition show={openKeypanel} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenKeypanel(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-[#111111] ring-1 ring-[#343434] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Enter your OpenAI API Key
                  </Dialog.Title>
                  <p className="text-sm text-gray-400 py-1">
                    Your API key is stored only to your browser's local storage.
                  </p>

                  <div className="py-2 flex flex-col">
                    <label className="text-white text-sm py-2">
                      OpenAI API Key (
                      <Link
                        href="https://platform.openai.com/account/api-keys"
                        target="_blank"
                        className="text-purple-400 focus:outline-none"
                      >
                        Get API key
                      </Link>
                      )
                    </label>
                    <div className="relative w-full flex px-3 py-2 bg-transparent rounded-md ring-2 ring-[#343434] focus-within:ring-purple-400 ease-linear transition">
                      <input
                        type={showKey ? "text" : "password"}
                        className=" text-gray-200 text-sm bg-transparent focus:outline-none w-full pr-2"
                        id="collectionName"
                        name="collectionName"
                        value={apiKey}
                        placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
                        required={true}
                        onChange={(e) => setApiKey(e.target.value)}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setShowKey(!showKey)}
                        className="w-6 h-6 text-neutral-500 hover:text-white ease-linear transition cursor-pointer"
                      >
                        {showKey ? (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </>
                        ) : (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-purple-400 disabled:brightness-75 disabled:hover:bg-purple-400 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium text-white hover:bg-purple-400/75 transition ease-linear focus:outline-none"
                      disabled={
                        apiKey.length === 0 &&
                        window.localStorage.getItem("openai_api_key") === null
                      }
                      onClick={(e) => {
                        if (
                          apiKey.length === 0 &&
                          window.localStorage.getItem("openai_api_key") !== null
                        ) {
                          removeApiKey(e);
                        } else {
                          saveApiKey(e, apiKey);
                        }
                      }}
                    >
                      {apiKey.length === 0 &&
                      window.localStorage.getItem("openai_api_key") !== null
                        ? "Remove Key"
                        : "Save Key"}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-neutral-600 hover:bg-neutral-600/75 px-4 py-2 text-sm font-medium text-white transition ease-linear focus:outline-none"
                      onClick={() => setOpenKeypanel(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
