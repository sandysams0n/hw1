import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBook extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookIsbn = this.onChangeBookIsbn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
          name: '',
          author: '',
          isbn: ''
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:4000/books/edit-book/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              name: res.data.name,
              author: res.data.author,
              isbn: res.data.isbn
            });
          })
          .catch((error) => {
            console.log(error);
          })
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
    
        axios.put('http://localhost:4000/books/update-book/' + this.props.match.params.id, bookObject)
          .then((res) => {
            console.log(res.data)
            console.log('Book successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Book List 
        this.props.history.push('/book-list')
      }
    
    
      render() {
        return (<div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName} />
            </Form.Group>
    
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="author" value={this.state.author} onChange={this.onChangeBookAuthor} />
            </Form.Group>
    
            <Form.Group controlId="Name">
              <Form.Label>ISBN</Form.Label>
              <Form.Control type="text" value={this.state.isbn} onChange={this.onChangeBookIsbn} />
            </Form.Group>
    
            <Button variant="danger" size="lg" block="block" type="submit">
              Update Book
            </Button>
          </Form>
        </div>);
      }
    }