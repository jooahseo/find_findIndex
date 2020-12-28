
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val){
    return val.username === username;
  })
}

function removeUser(usersArray, username) {
  const target = usersArray.findIndex(function(val){
    return val.username === username;
  });
  if(target > -1 ){
    return usersArray.splice(target,1)[0]; //why [0] at the end? 
  }else{
    return undefined;
  }
}