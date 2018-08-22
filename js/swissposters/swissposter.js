class Poster extends React.Component {
  render() {
    return (
      <div className='SwissPoster'>
        {this.props.children}
      </div>
    )
  }
}