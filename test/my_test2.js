async function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

let call = async (i) => {
  await sleep(i * 100);
  if (i === 5) {
    throw new Error("wrong");
  }
  console.log(i);
  return i;
}

let tasks = [];
for (let i = 1; i < 10; i++) {
  tasks.push(call(10 - i));
}

// (async () => {
//   let t = global.performance.now();
//   try {
//     let rets = [];
//     let i = 0;
//     for (let task of tasks) {
//       rets[i++] = await task;
//     }
//     console.log(rets);
//   } catch (e) {
//     console.log("handle")
//   }
//   console.log(performance.now() - t)
// })();

function All(tasks) {
  return new Promise((resolve, reject) => {
    let ret = [];
    let i = 0;
    for(let task of tasks) {
      task.catch(reject)
    }
    (async()=> {
      try {
        for(let i =0; i < tasks.length; i++) {
          ret[i] = await tasks[i];
        }
        resolve(ret);
      } catch (e) {

      }
    })();
  });
}


let t = global.performance.now();
(async () => {
  try {
    console.log(await All(tasks))
  } catch (e) {

  }
  console.log(performance.now() - t)
})()


