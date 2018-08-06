// @flow

/** Merge 2 adjacent elements of an array when predicate fn is true */
export function mergeWhen<T> (
  array: Array<T>,
  predicate: (current: T, next: T) => mixed,
  merge: (current: T, next: T) => T
): Array<T> {
  if (array.length <= 1) {
    return array
  }

  const result = []
  let canMerge = true

  for (let i = 0; i + 1 < array.length; i++) {
    let current = array[i]
    let next = array[i + 1]

    if (canMerge) {
      if (predicate(current, next)) {
        result.push(merge(current, next))
        canMerge = false
      } else {
        result.push(current)
      }
    } else {
      canMerge = true
    }
  }

  if (canMerge) {
    result.push(array[array.length - 1])
  }

  return result
}
