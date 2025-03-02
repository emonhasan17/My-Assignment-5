const deletebuttons = document.querySelectorAll('.btn-complete')

for(const deletebutton of deletebuttons){
    deletebutton.addEventListener('click',function(event){
        const alerted = alert('Board Updated Sucessfully',)
        const taskAssign = document.getElementById("task-assigned").innerText
        const taskAssigned = parseInt(taskAssign)
        const newValue = taskAssigned -1
        document.getElementById("task-assigned").innerText = newValue
        const completeTask = document.getElementById("complete-task").innerText
        const finalCompleteTask = parseInt(completeTask)
        const finalNewValue = finalCompleteTask + 1
        document.getElementById('complete-task').innerText = finalNewValue
        deletebutton.disabled = true
        const activityLog = document.getElementById('activity-log')
        const head = event.target.parentNode.parentNode.childNodes[3].innerText
        const currentTime = new Date()
        const hours = currentTime.getHours()
        const periodHours = hours >= 12 ? 'PM':'AM'
        const limitedHours = hours % 12 
        const finalHours = limitedHours ? limitedHours : 12
        const minutes = currentTime.getMinutes()
        const seconds = currentTime.getSeconds()
        const timeString = `${finalHours}:${minutes}:${seconds} ${periodHours}`
        const p = document.createElement('p')
        p.innerHTML = `
        <p>You have Complete ${head} at ${timeString} </p>
        `
        p.classList.add('bg-slate-100','m-5','rounded-lg','p-3')
        activityLog.appendChild(p)
        if(newValue === 0 ){
            const alerted1 = alert('Congrats!!! You have completed all the current task')
        }
        
        
    })
}




// ------------------------clear history section-------------------------


document.getElementById('btn-clear').addEventListener('click',function(){
    const activityClear = document.getElementById("activity-log")
    activityClear.classList.add('hidden')
})


// ---------------------random bg section---------------------------

document.getElementById("random-bg").addEventListener('click',function(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    const opacity = Math.random()
    const randomColor = `rgb(${red},${green},${blue},${opacity})`
    document.getElementById("body-bg").style.backgroundColor = randomColor
    console.log(red,green,blue,)
})


// -------------------current date section--------------------------
const currentDate = document.getElementById("current-date")
const dateTime = new Date()
const months = ['Jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const month = months[dateTime.getMonth()]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = days[dateTime.getDay()]
const date = dateTime.getDate()
const year = dateTime.getFullYear()
const P = document.createElement('p')
P.innerHTML = `
<p class = 'text-xl'> ${day} ,</p> 
<p class = 'font-bold text-xl'> ${month} ${date} ${year} </p>
`
currentDate.appendChild(P)



console.log(day,month,date,year)


// -------------------redirect to blog page------------------------
document.getElementById("btn-blog").addEventListener('click',function(){
    window.location.href = './main.html'
})