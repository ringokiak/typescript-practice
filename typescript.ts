/*
 * @Author: r1ngo
 * @Date: 2022-03-09 16:31:26
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-14 10:05:06
 * @Description: TS学习笔记
 */

// 字符串
const a: string = ''
/* ========================================================================== */

// 数字
const b1: number = 1
const b2: number = Infinity
const b3: number = NaN
/* ========================================================================== */

// bigint
const c: bigint = BigInt(1)
/* ========================================================================== */

// 布尔值
const d: boolean = true
/* ========================================================================== */

// symbol对象
const e: symbol = Symbol('d')
/* ========================================================================== */

// null
const f: null = null
/* ========================================================================== */

// undefined
const g: undefined = undefined
/* ========================================================================== */

// void
const h1: void = undefined
const h2 = (): void => {}
const h3 = (): void => {
  return undefined
}
/* ========================================================================== */

// 对象
const i1: object = {}
const i2: object = []
const i3: object = () => {}
const i4: {} = {}
const i5: { name: string; age: number } = {
  name: 'ringo',
  age: 30,
}
const i6: { name?: string; age: number } = { age: 18 } // name 为可选成员
/* ========================================================================== */

// 数组
const j1: Array<number | string> = [123, '123'] // 需注意 <> 与 JSX 的冲突
const j2: (number | string)[] = [123, '123']
/* ========================================================================== */

// 任意类型
const k: any = 1 + '1' + {} + []
/* ========================================================================== */

// 枚举
const enum Status1 {
  a,
  b,
}
enum Status2 {
  a,
  b,
}
const l1 = Status1.a
const l2 = Status2[0]
/* ========================================================================== */

// 类型断言
const nums = [1, 2, 3]
const m = nums.find((i) => i > 2) as number
/* ========================================================================== */

// 隐式类型推断
let n
n = 1
n = '1'
/* ========================================================================== */

// 元组类型
const o: [number, string] = [1, '1']
/* ========================================================================== */

// 接口
interface Post {
  name: string
  age: number
  gender?: string
  readonly alive: boolean // 不可修改，只读
}
interface Get {
  [key: string]: any // 成员数量任意
}
const p1: Post = {
  name: 'ringo',
  age: 30,
  alive: true,
}
const p2: Get = {}
/* ========================================================================== */

// 类
class Person {
  name: string // 类似于 java 的 init name
  public age: number // 公开属性，无访问限制
  private gender: string // 私有属性，只能从父类 Person 访问
  protected alive: boolean // 保护属性，只能从父类和继承父类的子类上访问
  public readonly engaged: boolean // 只读属性跟在修饰符之后，代表不可修改
  constructor(
    name: string,
    age: number,
    gender: string,
    alive: boolean,
    engaged: boolean
  ) {
    this.name = name
    this.age = age
    this.gender = gender
    this.alive = alive
    this.engaged = engaged
  }
  speak(word: string): void {
    console.log(`${this.name} says: ${word} as a ${this.gender}`)
  }
}
class ClonePerson extends Person {
  // 无法被继承，也无法从外部实例化，如果是 protected 则代表可以被继承，但无法实例化
  private constructor(
    name: string,
    age: number,
    gender: string,
    alive: boolean,
    engaged: boolean
  ) {
    super(name, age, gender, alive, engaged)
  }
  // 可以通过设置静态函数，从外部调用来实例化
  static create(
    name: string,
    age: number,
    gender: string,
    alive: boolean,
    engaged: boolean
  ) {
    return new ClonePerson(name, age, gender, alive, engaged)
  }
}
const q1 = new Person('ringo', 30, 'male', true, true)
q1.speak('ez pz')
const q2 = ClonePerson.create('ringo', 30, 'male', true, true)
/* ========================================================================== */

// 类与接口
interface Play {
  likeOrNot: string
}
interface Result {
  get(res: string): void
}
class Ringo implements Play, Result {
  likeOrNot: string
  constructor(likeOrNot: string) {
    this.likeOrNot = likeOrNot
  }
  get(res: string) {
    console.log(`I ${this.likeOrNot} it, because of ${res}`)
  }
}
const r = new Ringo('like')
r.get('fun')
/* ========================================================================== */

// 抽象类 ———— 无法被实例化，只能被继承
abstract class Animal {
  eat(thing: string): void {
    console.log(`I like to eat ${thing}`)
  }
  abstract sleep(time: string): void // 抽象方法，无需方法体，需要在子类中自定义方法如何实现
}
class Dog extends Animal {
  sleep(time: string): void {
    console.log(`I sleep at ${time}`)
  }
}
const s = new Dog()
s.eat('meat')
s.sleep('night')
/* ========================================================================== */

// 泛型 ———— 用变量定义类型，在实际使用时才传入类型
function numOrStr<T>(value: T): T {
  return value
}
const t1 = numOrStr<string>('1')
const t2 = numOrStr<number>(1)
/* ========================================================================== */

// 类型声明 ———— 外部引用的函数未作类型约束时，可在引入后作类型声明
// declare function func(name: string): void
/* ========================================================================== */
