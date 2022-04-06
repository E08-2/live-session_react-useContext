# React Band Page 5: Props or useContext

Now let's try to implement the useContext hook in the "Black Sabbath" band page, to make sure you don't have to pass props through multiple components before their data is used (i.e. "prop drilling")...

### Instructions

1. Open `App.js`.

2. Look through the file. Whenever you find a child component of the `App` component to which `props` are passed, you should follow the "journey" of **each** prop.

3. If the data in the prop is actually used by the **child** component, you should keep the prop as it is.

4. However, any time you find one or more props in the child component which are simply being passed down again, to a **grandchild** component of `App`, you should instead create **context** in `App.js`, and implement a **useContext** hook in the **grandchild** to consume the data you will pass through the context. 

**Remember:** This will mean `App` can pass the data **directly** to the grandchild component, so you do not need to "prop drill" via the child component.  

5. When you do this, the hook's **Provider** component, created with `createContext()`, should be placed in `App.js`. Its **"consumer"** variable, created with `useContext()`, should be placed in the grandchild component which needs to use ("consume") the data "provided" by `App.js`.

**Hint:** The two child components of `App.js` using props are:

- `<Albums />`
- `<CurrentAlbum />`

---

### If you finish early...

... You are welcome to continue adding content and/or styling to your "React Sandbox" project from this morning. :-)

---

Good luck, and have fun!