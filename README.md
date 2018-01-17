Style Guide
===========

Official Style guide for all Awin projects. Serves as a reference for
Development by providing a markup pattern library for common UI elements.

Developmnet Lifecycle
=====================

Test your work locally with standard makefile workflow: `make` to build, `make
start` to host, `make run` to poke in a fresh container, `make exec` to poke
into a running one.

source files are placed in `src/css` and `src/js`. Gulp copies them to `public/css` and `public/js`, then minifies them and places the final result into `public/dist`. The full URL for loading the main CSS file is `//styleguide.awin.com/dist/awin.css`

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

