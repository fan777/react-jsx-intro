const Person = (props) => {
  let hobbies = props.hobbies.map(t => <li>{t}</li>)
  return <div>
    <p>Learn some information about this person. </p>
    <ul>
      <li>
        Name: {props.name}
      </li>
      <li>
        Age: {props.age}
      </li>
      <li>Hobbies</li>
      <ul>{hobbies}</ul>
    </ul>
    <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
  </div >
}