import React from 'react';
import mypic from '../images/2.jpg'

function LoginPage() {
  return (
          
            <div class="bg-pupul-bg flex h-screen justify-center items-center">
              <div class="w-1/3 bg-gradient-to-t from-puple-b to-puple-md h-4/6 rounded-l-lg"></div>

              <div class="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-lg ">
                <div class="w-full max-w-md p-8">
                  <h2 class="text-3xl font-bold mb-6">Login</h2>
                  <form>
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                      >
                        Username
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="flex items-center justify-between">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Login
                      </button>
                      <a
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  );
}

export default LoginPage;