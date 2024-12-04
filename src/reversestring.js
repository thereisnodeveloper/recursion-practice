/**
 *
 * @param {String} string
 * @returns
 */
export function reverse(string) {
    const head = string[0];
    if (string.length <= 1) return head;
  const tail = string.slice(1);
  return reverse(tail) + head;
}
