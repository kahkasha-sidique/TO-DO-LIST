
export const userCreate=(name)=>{
console.log(name,"name")
return{
  type:'CREATE_TASK',
  payload:name
};
}

export const userUpdate=(name,index)=>{
  return{
    type:"UPDATE_TASK",
    payload:{name,index}
  }
}