//상수보다는 변수를 이용하는게 깔끔하여 아래에 다시 정리

// const clock = function(){
//     const clockTime = document.querySelector("p.time")
//     const now1 = new Date()
//     const hour = now1.getHours()
//     const min = now1.getMinutes()
//     const sec = now1.getSeconds()
//     const nowTime = `${hour<10 ? `0${hour}` : hour}:${min<10 ? `0${min}` : min}:${sec<10 ? `0${sec}` : sec}`
//     clockTime.textContent = nowTime

//     const clockDay = document.querySelector("p.day")
//     const now2 = new Date()
//     const year = now2.getFullYear()
//     const mon = now2.getMonth()+1
//     const day = now2.getDate()
//     const nowDay = `${year}년 ${mon<10 ? `0${mon}` : mon}월 ${day<10 ? `0${day}` : day}일`
//     clockDay.textContent = nowDay
// }

const clockDay = document.querySelector("p.day")
const clockTime = document.querySelector("p.time")

const clock = function(){
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let year = now.getFullYear()
    let mon = now.getMonth()+1
    let day = now.getDate()

    hour = hour<10 ? `0${hour}` : hour
    min = min<10 ? `0${min}` : min
    sec = sec<10 ? `0${sec}` : sec
    mon = mon<10 ? `0${mon}` : mon
    day = day<10 ? `0${day}` : day

    clockDay.textContent = `${year}년 ${mon}월 ${day}일`
    clockTime.textContent = `${hour}:${min}:${sec}`
}

//함수 불필요

// onload = function(){
//     clock()
//     setInterval(clock,1000)
// }

clock()
setInterval(clock, 1000)