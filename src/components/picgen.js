import React, { Component } from 'react'
import axios from 'axios'

class PicGen extends Component {
  state = {
    pictures: []
  }

  getPhotos = () => {
    axios.get('https://picsum.photos/v2/list').then(resp => {
      console.log(resp.data)
      this.setState({ pictures: resp.data })
      console.log(resp.data.url)
    })
  }

  componentDidMount = () => {
    this.getPhotos()
  }

  render() {
    return (
      <div>
        <h1>Random image generator</h1>
        <ul>
          {this.state.pictures.map((pics, i) => {
            return (
              <div>
                <ul>
                  <li key={i}>
                    <img
                      src={pics.download_url}
                      style={{ width: '5rem' }}
                    ></img>
                  </li>
                </ul>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PicGen
