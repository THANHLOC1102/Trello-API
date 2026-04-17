
//original {1,2,3,4,5}
//order [3,1,4,2,5]
// sẽ sắp xếp original theo order kết quả xuất ra theo order

export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}