export const checkIfOverflow=(ele_width, window_width)=>{
    return ele_width > (window_width - 50) // 50 is the buffer length
}