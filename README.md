# Tooltip framework | tippy.js

## General

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

Hello and welcome to my tooltip framework. tippy.js is a customizable tooltip that you can use for your websites. This project is made with the intention to grow further in the future with more customizable options.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

This project was initially made for school, the assignment consisted of making a framework or library from scratch with JavaScript and implementing it in your own website. The reason why I chose a tool tip is because i couldn’t find a good example of a tool tip made in JavaScript, all I could find were examples made in CSS. I wanted to challenge myself by making one.

## Installation

Add the CSS file to your HTML header.
```html
<link href="css/tippy.css" rel="stylesheet">
```

Add the JavaScript files at the BOTTOM of your HTML file. If the JavaScript file is not placed at the bottom then the tool tip won’t work.
```htm
<script src="js/tippy.js"></script>
<script src="js/tippy-custom.js"></script>
```

## Usage

With tippy.js you can make every piece of text have a tooltip hover over it. 
The only thing you need to do is use the class name
```html
class="tippy"
```

And then use the attribute ty-title to put in any text you want to hover above.
```html
ty-title="What ever text you want"
```

An example code would be
```html
<h1 class="tippy" ty-title="Hello world!">Hover over me</h1>
```
![tippy](http://i.imgur.com/Dx3Haqs.png)

In tippy-custom.js you can change the style of the tool tip to whatever you want.
```html
    bgColor: '#9F9FAD',
    borderRadius: 10,
    width: 150,
    fontColor: '#fff',
    fontWeight: 'bold',
```
