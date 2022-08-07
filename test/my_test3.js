// 1

function test_closure() {
  let prints = [];
  let i = 0;
  for (; i < 10; i++) {
    let print = ((j) => {
      return () => {
        console.log(j);
      }
    })(i);
    // let print = ()=> {
    //   console.log(i);
    // }
    prints.push(print);
  }

  return prints
}

let ps = test_closure();

for (let p of ps) {
  p();
}