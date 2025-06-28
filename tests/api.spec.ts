import {test, expect, request} from '@playwright/test';

const url='https://rahulshettyacademy.com/client/auth/login';
const Requestpayload={userEmail: "raghavmaddali.1357@gmail.com",userPassword: "1357@Raghav"};
//const websiteurl='https://reqres.in/';
const geturl='https://reqres.in/api/users?page=2';

// test("post request", async()=>{

//     const apiContext=await request.newContext();
//     const response=await apiContext.post(url,{data:Requestpayload});
//     response.status();
//     //await expect(response.status()).toBe(200);
//     const jsonResponse=response.json();
//     console.log(jsonResponse)

//   //await expect(jsonResponse.userId).toBe("66bca170ae2afd4c0b4b8748")
//   // await expect(jsonResponse.message).toContain("Login Successfully")

// })

// test("get api call",async()=>{

// const apicontext=await request.newContext();
// const getresponse=await apicontext.get(geturl);
// await expect(getresponse.status()).toBe(200);
// const getjsonresponse=await getresponse.json();
// console.log(getjsonresponse);


// })

test("create user", async()=>{
let apikey='reqres-free-v1'
const ApiContext=await request.newContext();
const response1=await ApiContext.put('https://reqres.in/api/users/2',{
    data:{name: "morpheus", job: "zion resident"}})

//await expect(response1.status()).toBe(200);
const jsonResponse1=await response1.json();
console.log(jsonResponse1);
// await expect(jsonResponse1.name).toBe("morpheus");
// await expect(jsonResponse1.job).toBe("zion resident");


})