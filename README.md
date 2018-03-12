Style Guide
===========

Official Style guide for all Awin projects. Serves as a reference for
Development by providing a markup pattern library for common UI elements.

Developmnet Lifecycle
=====================

Test your work locally with standard makefile workflow: `make` to build, `make
start` to host, `make run` to poke in a fresh container, `make exec` to poke
into a running one.

In `src/app.ts` you will see files from `src/css`, `src/js` and a few node_modudes being imported.
Webpack is processing the files in `src/app.ts` to generate a bundle which consists of 2 files: `awin.css` and `awin.js`
These files are placed in `public/dist` folder. 
The url for the main awin.css file is:
`//styleguide.awin.com/dist/awin.js`

If you need to include more js or css files into the bundle you need to import them in `src/app.ts` 
Webpack will concatenate and minify all the css files listed in `src/app.ts` into the `awin.css` and all the js files
 into `awin.js`

This project is automatically built and deployed with Jenkins

Here are the [Build Job](https://jenkins.zanox.com/job/INTERNAL-styleguide_1-Build/) and [Deploy Job](https://jenkins.zanox.com/job/INTERNAL-styleguide_4-Office).

License
=======

```
Copyright (c) 2017, Awin Limited
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
 
1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
 
3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

