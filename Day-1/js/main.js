// promise
// server === 10s ===> client
// server error (exception)
// client error (exception)
// code error (exception)

// promise async nature
async function fun() {
  // server operation
  // success
  return Promise.resolve("message");

  // fail
  return Promise.reject("error");
}

// multi promise
// 1,2,3,4 => if your run promise in sequence ==> await
// if you are using await , it must be called in a promise function
/*
async function pro(){
    try{
        let result = await p()
        let result1 =  await p1()
        let result2 =  await p2()
    }catch(error){

    }
}

*/
async function checkStatus(status) {
  switch (status) {
    case 200 || 201 || 304:
      return Promise.resolve();

    case 404:
      return Promise.reject("Page Not Found");

    default:
      return Promise.reject("server error");
  }
}
async function getUser() {
  try {
    let url = "https://jsonplaceholder.typicode.com/users/1";
    let response = await fetch(url, { method: "get" });
    await checkStatus(response.status);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    alert(error);
  }
}

getUser();
