# Day 4: The Ideal Stocking Stuffer

Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find __MD5__ hashes which, in hexadecimal, start with at least five zeroes. The input to the __MD5__ hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

### For example:

* If your secret key is `abcdef`, the answer is `609043`, because the __MD5__ hash of `abcdef609043` starts with five zeroes (`000001dbbfa...`), and it is the lowest such number to do so.
* If your secret key is `pqrstuv`, the lowest number it combines with to make an __MD5__ hash starting with five zeroes is `1048970`; that is, the __MD5__ hash of `pqrstuv1048970` looks like `000006136ef....`

## Part Two

Now find one that starts with six zeroes.
