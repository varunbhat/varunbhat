---
layout: post
title:  "Automake Init"
date:   2017-04-17 14:02:04 -0600
categories: Automake c++ buildtools buildessential
---


## Automake

Automake is an automated tool to create projects. Most of today's projects make use of Automake to create and install softwares. Tha all famous *./configure* ; *make* and *make install* uses automake to compile the code. Here is my notes to set up a basic project using automake. Please make note that there are other tools that are used as well. CMake is one among the tools that are recently being used a lot.


### Init automake

Create a project folder, inside it, create a file called configure.ac. This contains all the Macros that are used to initialize the project. My base template for creating the project isas below.


{% highlight bash %}
#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT([Project Name], [0.1], [varunb@colostate.edu])
AC_CONFIG_SRCDIR([config.h.in])
AC_CONFIG_HEADERS([config.h])
AC_CONFIG_MACRO_DIRS([m4])

AM_INIT_AUTOMAKE

AX_CXX_COMPILE_STDCXX_11

LT_INIT

# Checks for programs.
AC_PROG_CXX
AC_PROG_AWK
AC_PROG_CC
AC_PROG_CPP
AC_PROG_INSTALL
AC_PROG_LN_S
AC_PROG_MAKE_SET

# Checks for libraries

# Checks for header files.

# Checks for typedefs, structures, and compiler characteristics.
AC_CHECK_HEADER_STDBOOL

# Checks for library functions.
AC_CHECK_FUNCS([pow])

AC_CONFIG_FILES([Makefile])


AC_CONFIG_SUBDIRS([libltdl])
AC_OUTPUT

{% endhighlight %}


After setting up the base, run the following command:

```
aclocal -I m4 --install
automake --add-missing
```


The following command creates links to the missing files. Howerver there is a way to add the missing files instead of copying. Also, I am not going to explain what each of this means as I leave it to the documentation. 

The config also defines using libtool to link the libraries. Hence, create the missing files using:

```
libtoolize
```


```
autoreconf
```


## Setting up the make file

I like to keep things separated. Hence I use a root Makefile and create sub folders where I put in the project files. Like the Library folder in lib, sources in src etc. The template for the root Makefile and the subfolders are as below.


```
# [Makefile.am]
ACLOCAL_AMFLAGS = ${ACLOCAL_FLAGS} -I m4
AM_CPPFLAGS = $(BOOST_CPPFLAGS)
AM_LDFLAGS = $(BOOST_LDFLAGS)

SUBDIRS = src

```




Add each of the sub directories in the macro SUBDIRS.


```
bin_PROGRAMS = clos
clos_SOURCES = main.cpp crosstalk.cpp
clos_CPPFLAGS = -DCLOS_CONST_Q_FACTOR -DMATERIAL=$(SI_SIO2)

```

do a 
```
autoreconf
./configure
make
```

The steps creates an executable.

## Using the M4 macros


M4 macros are predefined macros to check certain conditions or scripts to execute to link or modify the executable. The automake library has a list of predefined macros that can be used. Download the required macro (Including the dependent macros) and add them to the makefile. The steps for using the macro will be defined in the documentation.

[Link](https://www.gnu.org/software/m4/m4.html) to the automake macros.

