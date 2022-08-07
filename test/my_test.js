// let signal = false;
//
// setTimeout(() => {
//   signal = true
// }, 1000)
//
// async function async_func() {
//   return 1;
// }
//
// async function sleep(timeout) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
//   })
// }
//
// (async () => {
//   await wait_condition(2000);
//   console.log("wait finished")
// })()
//
// sleep(1000).then((ret) => {
//
// })
//
// let create_thread = async(tname)=>{
//   await sleep(1000)
//   console.log(tname, 1)
//   await sleep(1000)
//   console.log(tname, 2)
//   let ret = 1.0;
//   for (let i = 0; i <10000000;i++) {
//     ret *= i;
//   }
//   console.log(tname, 3)
//   await sleep(1000)
//   console.log(tname, 4)
// }
// create_thread("t1")
// create_thread("t2")

//
// sleep(1000).then(() => {
//   console.log("a")
//   sleep(1000).then(()=>{
//     console.log("b")
//     sleep(1000).then(()=>{
//       console.log("c")
//       sleep(1000).then(()=>{
//         console.log("d")
//       })
//     })
//   })
//
// })


let tasks = [];
let consume_tasks = () => {
  while(true) {
    if(tasks.length === 0) {
      break;
    }
    let task = tasks[0]
    tasks = tasks.splice(1)
    task();
  }
}

class MyPromise {
  constructor(callback) {
    this.tasks = []
    this.resolve = (data) => {
      for (let func of this.tasks) {
        tasks.push(() => {
          func(data)
        })
      }
      consume_tasks();
    }
    callback(this.resolve)
  }

  then(func) {
    let my_resolve = undefined;
    let pro = new MyPromise(resolve => {
      my_resolve = resolve;
    });
    this.tasks.push((data) => {
      let ret = func(data);
      my_resolve(ret);
    })
    return pro;
  }
}

new MyPromise(resolve => {
  setTimeout(()=>{resolve(1)}, 1000)
}).then((data) => {
  console.log("Then 1...", data)
  return 2;
}).then((data) => {
  console.log("Then 2...", data)
});

setInterval(consume_tasks, 4)