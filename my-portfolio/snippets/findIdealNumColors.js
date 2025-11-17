function findIdealNumColors(numerator, denominator, currentNumColors) {
  /** 
This function uses recursion to find the ideal number of colors to show fraction division with circles and avoid two separate groups of the same color bordering each other (imagine 3 groups of 2/6ths in a circle and only 2 alternating colors. You would have 4/6ths all adjacent to each other in the same color which would be confusing and misleading. So the idealNumColors for any problem with a divisor of 2/6ths would be 3. But with divisors such as 4/7ths for example, not every circle will have the same number of groups. One circle may have 4/7ths and 3/7ths (minGroupsPerCircle = 2) but the next circle would then have 1/7th, 4/7ths, and 2/7ths (maxGroupsPerCircle = 3). This means the remainders of minGroupsPerCircle/numColors and maxGroupsPerCircle / numColors should not be 1.

Take 5/9ths as an example.The minGroupsPerCircle is 2 (5/9ths and 4/9ths for example) and the maxGroupsPerCircle is 3 (1/9th, 5/9ths, and 3/9ths for example). First the function will try numColors = 2. For the circles with 3 different groups, there would be two adjacent groups with the same color which is a problem. The check for maxGroupsPerCircle % numColors === 1 will be true (indicating that numColors cannot be 2). Then the function calls itself to run again, this time trying numColors = 3. 3 alternating colors will work for both circles with two groups and three groups. So this function would return the idealNumColors as 3.
The algorithm will sometimes choose more colors than needed but I prefer it that way.
*/
  if (denominator % numerator === 0) {
    minGroupsPerCircle = denominator / numerator;
    maxGroupsPerCircle = minGroupsPerCircle;
  } else if ((denominator * 2) % numerator === 0) {
    minGroupsPerCircle = Math.ceil(denominator / numerator);
    maxGroupsPerCircle = minGroupsPerCircle;
  } else {
    minGroupsPerCircle = Math.ceil(denominator / numerator);
    maxGroupsPerCircle = minGroupsPerCircle + 1;
  }
  if (
    minGroupsPerCircle % currentNumColors === 1 ||
    maxGroupsPerCircle % currentNumColors === 1
  ) {
    return findIdealNumColors(numerator, denominator, currentNumColors + 1);
  } else {
  }
  return currentNumColors;
}
