const checkBoxList = document.querySelectorAll('.custom-checkbox')
const error=document.querySelector('.warning')
const inputFields=document.querySelectorAll('.goal-input')
const progressbar=document.querySelector('.progress-bar');
const progressvalue=document.querySelector('.progress-value');
const number=document.querySelector(".progress-value span")
const showtask = JSON.parse(localStorage.getItem('taskCompleted'))||{};
let num = Object.keys(showtask).length;
number.innerText=`${num}/3 Completed`;
// let width =`${num/3*100}%`;
progressvalue.style.width = `${num/3*100}%`;


checkBoxList.forEach((checkbox,i)=>{

  let a=`goal${i}`
  if(showtask[`${a}`]=="completed"){
    checkbox.parentElement.classList.add('completed')
  }

})
// if(num==1){
//   width=220;
//   progressvalue.style.width = width+ "px";

// }
// else if(num==2){
//   width=440;
//   progressvalue.style.width = width+ "px";
// }
// else if(num==3){
//   width=660;
//   progressvalue.style.width = width+ "px";

// }

checkBoxList.forEach((checkbox,i)=>{
  checkbox.addEventListener('click',(e)=>{
    
    const allFieldsFilled =[...inputFields].every(
      (input)=>{
        return input.value

    })
    if(allFieldsFilled){

  if(checkbox.parentElement.classList.contains('completed')){
    const completed=JSON.parse(localStorage.getItem("taskCompleted"));
    let a=`goal${i}`
      delete completed[`${a}`];
      localStorage.setItem('taskCompleted',JSON.stringify(completed))
    // width=width-220;
    num--;
    number.innerText=`${num}/3 Completed`;
    checkbox.parentElement.classList.remove('completed')
    progressvalue.style.width =`${num/3*100}%`;
  }
else{
  checkbox.parentElement.classList.add('completed')
    const completed=JSON.parse(localStorage.getItem("taskCompleted"))||{};
    let a=`goal${i}`
    completed[`${a}`]="completed"
   localStorage.setItem('taskCompleted',JSON.stringify(completed))
   
    if(num<=3){
      num++;
      number.innerText=`${num}/3 Completed`;
    }

    
      // width=width+220;
    progressvalue.style.width=`${num/3*100}%`;

}

    }
    else{
      
         progressbar.parentElement.classList.toggle('show-error')
    }
  })
})

const mygoals=JSON.parse(localStorage.getItem("myGoal"))||{};
if(Object.keys(mygoals).length > 0){
inputFields.forEach((inputs,i)=>{
  let a=`goal${i}`
inputs.value= mygoals[`${a}`]
})
}
 if(Object.keys(mygoals).length > 0){
    
  inputFields.forEach((events ,i )=>{
    events.addEventListener('input',(e)=>{
      let a=`goal${i}`
    if(showtask[`${a}`].value=="completed")
      {events.value=mygoals[`${a}`]
    console.log(mygoals[`${a}`]);
    return
  }
 else{
  inputFields.forEach((inputs,i)=>{
    let a=`goal${i}`
  inputs.value= mygoals[`${a}`]
  })
 }
    })
  })
  
 }



 inputFields.forEach((events,i)=>{
  events.addEventListener('input',(e)=>{
    let a=`goal${i}`
    mygoals[`${a}`]=e.target.value
    localStorage.setItem('myGoal',JSON.stringify(mygoals));

   
   })

 })
// input_goal1.addEventListener('input',(e)=>{

//  mygoals.goal1=e.target.value
//  localStorage.setItem('myGoal',JSON.stringify(mygoals));

// })
// input_goal2.addEventListener('input',(e)=>{
//   mygoals.goal2=e.target.value
//   localStorage.setItem('myGoal',JSON.stringify(mygoals));
 
//  })
//  input_goal3.addEventListener('input',(e)=>{
//   mygoals.goal3=e.target.value
//   localStorage.setItem('myGoal',JSON.stringify(mygoals));
//  t
//  })


