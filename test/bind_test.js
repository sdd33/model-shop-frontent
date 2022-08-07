class BindTest {
  constructor() {
    this.a = 1;
    this.test = this.test.bind(this);
  }

  test() {
    console.log(this.a);
  }
}

let t = new BindTest();

function func() {
  console.log(this)
}
// func = func.bind(t);
func();