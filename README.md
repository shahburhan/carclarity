# (https://burhan.surge.sh) Calculator

[**Visit the website.**](https://burhan.surge.sh)<br>

### Table of Contents
**[Installation Instructions](#installation-instructions)**<br>
**[Solution](#solution)**<br>
**[Time Spent](#time-spent)**<br>
**[Assumptions](#assumptions)**<br>
**[Resolves](#resolves)**<br>
**[Proud Part](#proud-part)**<br>
**[Improvements](#improvements)**<br>
**[Deviations](#deviations)**<br>


## Installation Instructions

1. Clone this repo.
2. cd into the directory
3. run npm run dev. It will start a dev server and echo out the url for you to check on.
3. for production run npm run build. It will create a build folder in your repo directory with all the required files.

## Solution

Initially I had thought of using a stack to store a postfix notation for all the calculations and use that to create both the calculation to show in the answer view and the result view. I couldn't fully implement it but added something to a similar effect. We store the operands and operators in an array and use that to manipulate the results.

## Time Spent

It took close to 12 hours to set it all up, probably overdid it.  

## Assumptions

Assumed it to be a lot simpler and less time consuming than it turned out to be. 

## Proud Part

I wanted to handle both the calculation (shown at top right in small font, 1+1) and the result (the actual calculation, 2) from one single source so that it dynamically updates on both ends. Doing that was fulfilling. Rest was pretty generic.

## Improvements

There is always room for improvements. From the top it:

1. Fine tuning the transition on calculation
2. Looking into that AC - CE switch
3. Getting CE to work as it is supposed to. etc

## Deviations

I don't think I deviated from the goal(UI). I had it early on but working on the calculations, I might have over done the solution there. But other than that I think I was on point.
