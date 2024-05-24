async function init () {
  const node = document.querySelector("#type-text1")
  const node2 = document.querySelector("#type-text2")
  const cursor = document.querySelector("#blick-cursor")
  const cursor2 = document.querySelector("#blick-Cursor2")
  const cursor3 = document.querySelector("#blick-Cursor3")
  const intro = document.querySelector("#small")

  
  await sleep(500)
  node.tostring = ""
  var hello = "HELLO, "
  var dot = "_"
  var name = " MY NAME IS DAVID MARRUCATE"
  var am = "I'M A,"
  var web = "FRONT-END WEB DEVELOPER!"
  var blog = "Crafting dynamic websites with a keen eye for design and functionality. Let's turn your ideas into captivating online experiences!"
  
  await cursor.type(dot)
  await node.delete('...')
  await sleep(1000)
  await node.type(hello)
  await cursor.delete(dot)
  await sleep(50)
  await cursor2.type(dot)
  await node2.type(name)
  await sleep(150)
  await cursor2.delete(dot)
  await cursor3.type(dot)
  await intro.type(blog)
  await cursor3.delete(dot)
  
  while (true) {
    await cursor2.type(dot)
    await sleep(2000)
    await node2.delete(name)
    await cursor2.delete(dot)
    await cursor.type(dot)
    await sleep(100)
    await node.delete(hello)
    await node.type(am)
    await cursor.delete(dot)
    await cursor2.type(dot)
    await node2.type(web)
    await sleep(2500)
    await node2.delete(web)
    await cursor2.delete(dot)
    await cursor.type(dot)
    await node.delete(am)
    await node.type('...')
    await sleep(1000)
    await node.delete('...')
    await node.type(hello)
    await cursor.delete(dot)
    await cursor2.type(dot)
    await node2.type(name)
    await sleep(5000)
    await cursor2.delete(dot)
  }
}




const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerHTML += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerHTML = this.innerHTML.slice(0, this.innerHTML.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })



init()
