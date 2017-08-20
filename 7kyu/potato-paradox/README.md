# Potato Paradox

Even if this challenge is only 7kyu, it took me a lot to complete it (~4hours). 
But once you figure it out, it's so simple that when you look back in time, you seem like a [Minecraft](https://en.wikipedia.org/wiki/Minecraft) character trying to figure out [redstone circuits](https://minecraft.gamepedia.com/Redstone_circuit).

## What is the "Potato Paradox"?

> The potato paradox is a mathematical calculation that has a counter-intuitive result. The "paradox" involves dehydrating potatoes by a seemingly minuscule amount, and then calculating a change in mass which is larger than expected. 
[Wikipedia](https://en.wikipedia.org/wiki/Potato_paradox)

## Codewars challenge description

All we eat is water and dry matter.
John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter.
The water content is 99 percent. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.
At the output there is only 98% moisture.
What is the total weight in kilograms (moisture plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: So much weight lost for so little water in less!
Can you help him?

Write function potatoes with:
```
p0 - initial humidity percent 
w0 - initial weight 
p1 - final humidity percent
```
> potatoes() should return the final weight coming out of the oven 'w1' truncated as an int.

### Example:
```javascript
potatoes(99, 100, 98) --> 50
```

## My solution
```javascript
function potatoes(p0, w0, p1) {
   return Math.floor((100 - p0) * w0 / (100 - p1))
}
```

### Explanation
At the start we have a weight of 'w0' which is 99kg water and 1kg dry matter.
After the water evaporates, the remaining total weight 'w1', contains 1 kg dry matter (the same because only the water evaporates, but now it's 2% of the total weight 'w1') and (98/100)*w1 kg water (98% of the total weight 'w1'). 
The equation becomes: 1 (kg) + (98/100)*w1 (kg) = w1 (kg), where '1kg' can be written as (100-p0)*w0/100. 
This means that `w1 = (100 - p0) * w0 / (100 - p1)`
