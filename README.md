# [Joshua Haller's Portfolio](https://jjhdev.com/)

## The Start

Ever since I finished my Full Stack web development boot camp, I have been working on my portfolio. I wanted to build a portfolio that fit me. I wanted it to be a single page that scrolled but with a persistent menu that let you navigate up and down the page with ease. I searched around for pieces I could put together that fit this idea. Then I came across this tutorial [Beginner React portfolio](https://www.youtube.com/watch?v=8vQeMZbUt98&list=WL&index=18&t=28s) on YouTube and thought it was everything I wanted.

At the time, I had never heard of using Tailwind for my CSS, but I thought I’d give it a shot. Man was it a lot more than I expected it to be. I really enjoyed figuring out how to write out the code to use Tailwind. The instructor was great at showing you how it worked, but I didn’t want to just copy and paste the code to “make” a portfolio. So, I used the Tailwind file provided and followed along by hard coding the rest. I still remember something Philip Loy would say in our boot camp classes, “Until you understand it hard code it. Don’t copy and paste.”

So, below is a link to my “in progress” portfolio. Logan Lowder recently challenged me to “work in the open” on my portfolio as a way to get feedback on it. Logan has been a great resource for me throughout this entire process. I still remember talking to him back when I started and being surprised that I had picked Full Stack. An area he has been working in for over 5 years. White boarding with him has been so helpful. So when he challenged me, I took his advice.

I have taken a few days to get things “ready’ for working in the open. I did want to track down a few questions I had about the design in the portfolio. Which led to some messages with [Timo Zimmermann](https://timo.engineer/) about Svelte. Big thank you to Timo taking the time to answer my questions! I will be posting updates on my [Twitter](https://twitter.com/jpixtwit), follow along if you’d like to! Thanks!

## First update

My first update is focused on adding more projects to my portfolio page. I rewrote some of the code in the Work component and the index.js content file. This allowed me to add more projects to the Work section of my portfolio. There were a few other visual elements that I wanted to change with some of my margins. I noticed a few were higher/closer to some content that I'd like.

My first attempt to populate my Work component was to create an array of objects in my content `index.js` and then `.map()` over it. This sort of worked but then my images were printing first and then the cards. I also need to account for the `ProjectDetail` function having the right properties. The main issue was going to be figuring out how to pass an `a href` using `.map()`. I also needed to work on the spacing so that each project had its own space. The way it looked was to have each project side by side. I decided to try and create individual components for each project. I wanted things to look good but also knew that I was struggling trying to smash too many puzzle pieces together. It seemed simpler to just create components that could live inside my Work component.

### Resources

[Beginner React portfolio](https://www.youtube.com/watch?v=8vQeMZbUt98&list=WL&index=18&t=28s)

[Starter files](https://github.com/Chensokheng/portfolio-beginner/tree/finish)
