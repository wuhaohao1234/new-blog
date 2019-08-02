// export default function eventMove(box) {
//     var dragging = false
//     var boxX, boxY, mouseX, mouseY, offsetX, offsetY

//     // 鼠标按下的动作
//     box.onmousedown = down
//     // 鼠标的移动动作
//     document.onmousemove = move
//     // 释放鼠标的动作
//     document.onmouseup = up
//     box.onmouseup = up

//     // 鼠标按下后的函数,e为事件对象
//     function down(e) {
//         dragging = true

//         // 获取元素所在的坐标
//         boxX = box.offsetLeft
//         boxY = box.offsetTop

//         // 获取鼠标所在的坐标
//         mouseX = parseInt(getMouseXY(e).x)
//         mouseY = parseInt(getMouseXY(e).y)

//         // 鼠标相对元素左和上边缘的坐标
//         offsetX = mouseX - boxX
//         offsetY = mouseY - boxY
//     }

//     // 鼠标移动调用的函数
//     function move(e) {
//         if (dragging) {
//             // 获取移动后的元素的坐标
//             var x = getMouseXY(e).x - offsetX
//             var y = getMouseXY(e).y - offsetY

//             // 计算可移动位置的大小， 保证元素不会超过可移动范围
//             var width = document.documentElement.clientWidth - box.offsetWidth
//             var height = document.documentElement.clientHeight - box.offsetHeight

//             // min方法保证不会超过右边界，max保证不会超过左边界
//             x = Math.min(Math.max(0, x), width)
//             y = Math.min(Math.max(0, y), height)

//             box.style.top = y + 'px'
//         }
//     }

//     // 释放鼠标的函数
//     function up(e) {
//         dragging = false
//     }

//     // 函数用于获取鼠标的位置
//     function getMouseXY(e) {
//         var x = 0, y = 0
//         e = e || window.event

//         if (e.pageX) {
//             x = e.pageX
//             y = e.pageY
//         } else {
//             x = e.clientX + document.body.scrollLeft - document.body.clientLeft
//             y = e.clientY + document.body.scrollTop - document.body.clientTop
//         }

//         return {
//             x: x,
//             y: y
//         }
//     }
// }