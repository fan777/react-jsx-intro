const App = () => {
  return <div>
    <Tweet name="charlie" username="cfan" message="just a test" date={new Date().toString()} />
    <Tweet name="jennifer" username="jfan" message="hello i have kids" date={new Date().toString()} />
    <Tweet name="biao" username="bboey" message="i'm cool" date={new Date().toString()} />
  </div>
}
