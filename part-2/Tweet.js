const Tweet = (props) => {
  return <p>
    {props.message} by {props.username} ({props.name}) at {props.date}
  </p>
}