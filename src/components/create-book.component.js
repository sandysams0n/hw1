import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBook extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookIsbn = this.onChangeBookIsbn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          author: '',
          isbn: ''
        }
      }
    
      onChangeBookName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeBookAuthor(e) {
        this.setState({ author: e.target.value })
      }
    
      onChangeBookIsbn(e) {
        this.setState({ isbn: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const bookObject = {
          name: this.state.name,
          author: this.state.author,
          isbn: this.state.isbn
        };
        axios.post('http://localhost:4000/books/create-book', bookObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', author: '', isbn: '' })
      }
    
  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName}/>
        </Form.Group>

        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookAuthor}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ISBN</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookIsbn}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Book
        </Button>
      </Form>
    </div>);
  }
}


