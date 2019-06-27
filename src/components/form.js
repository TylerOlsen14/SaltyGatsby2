import React from 'react'

export class form extends Component {
  state = {
    Name: "",
    Question: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDeault()
    alert(`  `)
  }
  render() {
    return (
      <div>
        <div>
          <h1>Let's talk together</h1>
          <h2>Phone number?</h2>
        </div>
        <form action="">
            <label for="Name">Your Name:
              <input 
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Your Name:"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>
            <label for="Question">Your Question:
              <input
                type="text"
                class="form-control"
                id="question"
                name="question"
                placeholder="Your Question"
                value={this.state.question}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default form
