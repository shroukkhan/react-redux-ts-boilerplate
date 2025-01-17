/**
 * A set of monkey-patched Array helpers.
 * Probably a bad idea to use these in a real production environment.
 * Monkey-patching is confusing to anyone seeing the project for the first
 * time (or coming back to it after a few weeks).
 * That said, this is a simple demo project, so what the hell, let's break
 * some rules =D
 */

/**
 * Array.prototype.swap
 * Rearrange an array to swap the positions of two elements.
 * @param {Number} a - the index of the first element to swap.
 * @param {Number} b - the index of the second element to swap.
 * @returns {Array}
 * @example
 * // returns [ 'a', 'c', 'b' ]
 * [ 'a', 'b', 'c' ].swap(1, 2)
 */
// @ts-ignore
Array.prototype.swap = function (a, b) {
    if (b >= this.length || b < 0) return this;

    // Temporary variable to hold data while we juggle
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;
    return this;
};

/**
 * Array.range
 * Create a new array of length n, where the elements are numbers
 * from 0 to n - 1.
 * @param {Number} n - the desired length of the range.
 * @returns {Array}
 * @example
 * // returns [ 0, 1, 2, 3 ]
 * Array.range(4);
 */
// @ts-ignore
Array.range = n => Array.from(new Array(n), (x, i) => i);
