import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { elementFloatX } from '../../actions/mouse'


export default class Project1 extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alpha: null,
      beta: 0,
      gamma: 0,
      mobile:true
    }
    this.elementFloatX = elementFloatX.bind(this)
    this.handleOrientation = this.handleOrientation.bind(this)
  }

  componentDidMount() {
    let specs = this.refs.Project1.getBoundingClientRect()
    this.setState({
      left: specs.left,
      right: specs.right,
      top: specs.top,
      bottom: specs.bottom
    })
    window.addEventListener("deviceorientation", this.handleOrientation)
  }

  handleOrientation(e) {
    this.setState({
      beta: event.beta,
      gamma: event.gamma,
      alpha: event.alpha,
      mobile:true
    })
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation", this.handleOrientation)// React .14+
  }

  render() {
    const test = (
        <div className="Project elementFloat" ref="Project1" style={this.elementFloatX()}>
          <h2>0111101110100111110001001101110100010011001100011100000011000010111101100100010001100110100010010110100111101111110011101010111101
0000011101010111010110001110001111100011010111000101011110111000110010010000000101001101010100001011110001100010011010111000110001
0000001001001101111101111110011101101011011100101111101001110111001110100100011001000001001001110001100110010010111000110011011001
1000101001111011000011101010101110001010101011010101011010011101011110000000111011011111110100101010100100111101101111011100101100
1111000110110011010110001001000001001100101111000001100110111111101100100100101000100000011000010010010001100101100011010001010010
1001011110101100110101101111001100011001000100100101001110111110001101111010000010010011100000011110011011000111101111101100001101
1101011101001011000010101110010010011011000111110111001001000000000000010101111010011111010000011101111111110100101000011111010001
1100111011011101001001111100000111001100001111001011010101010001001110110110111000000111001101000101000101011011111000100010110100
0110111111000011011101010000001011101110001010011110011000011011001000001101010110011010110010001101000100011101111110010110001100
1011000011000101001100001101000101001000010101000011001111111001010010110001000101000001001011111010001011101100110111001110000100
1111111100010010010100111101101000111111111100001100100010101001010011111001011110000110110011001101011101110010010111011100011010
1010110100000001001110101010100001111001001000101111101011010100001000010101000000011001010000000111000000010101111011110100011000
1111001011000010001111100111111101011110011101101001100110101111001000110111000100100011111101011100010111010111001000101010011111
1101101001100110110110001000010110010100110101001111111110111110000011001011001010010000011110001100011001000111111110100001100101
0100110110110110000100000100101010110110001001000111011011100111101110110101000011010001010011100001010010110110111111001111100110
0110111101010000101100001000100001011011110110111010001100100000111100010011001000111110101100010111011101001111011011110001011011
0010000110110010000111010111000011001001100111111011001100000000100100101101010101000000110010111100010010101011010111011100100011
1001110011101111101100011011011001100000001101001110011100001011000100010111101010001100101101111001110111011001101110010111010000
0111001111100100000011010101000110100110000101110011001001010001001001101000011010100111101011111110101100101100111011010111000000
1100110000101110111000000111001011010101001101001111111101001110011100110001101001001101001101000011010100110010001001011110010110
0100101011010101001000001000111100101100111100000010111000000000011001010011100110000110001000011001010100101111110110100101010100
1111000001001010111011100011111001000011101110101010111110110100011111100011010011100010010010000000101110000111010111001101110100
1110000000101000010001001001011010110111101001110010000001001001101100011100001010111001010011101100111001001101010100010011001111
1001001000000010100010010001101011001000111101011000101000101011010000111010110111111000110011110100000111010100000100111100011010
0000001101110101100100111101111111011000000011000100001010111101110011111111000010011010111011111100100100100011011011110111100000
0010110110101001011010101001100100011111110001110100000100001000100101101011110111011010111111110001110100111000111111101001001011
0000100010111111011010011011010010000100010001100111100011011100011000101110111111110100011110100110000011000010011011101011000111
0101100010001111111000000010000010101001110111100110000001111001110010110000010111001101000000110001100111000111011110110110100110
0010000011000101011111100101011011101001111100110010010101100100100011111110110100001100000000011110111100111011010010111011101100
1100100101010011100100101100010111000110101010101001001111010101100001011000011001001011100100011001101111101101010100011011110101
1000001010001111001111110000111000000101111101110111000101101010111111011101101011000101011111111100100011100110001000010011111111
1110110100110001110101100101110100110101110010000101010011101101101000011001101100111000100000101101011111111001000100011111000110
0111111010000011110011101000111100110110111010110011000100010011010000010110001100101111111011100000010011000101100101000001000110
1110010010111010010010111001011011000110000101000010110111110011111101000110101110101011111011100111001110110000110001000001110001
0010011100011001010011101000011010001001000011110010111000001111100110100100011001000010001001101100001110100111011111110011110011
0110000100010110110010001001010011110111111101001000101101010110001110011010100001110100111011011110001000000011000100001111010010
1001101101000011101010101010111101011000111100100100010110010011010111001010001110000111110110101010011110001010000000100110000010
0111101011001011000111100111111000000111011110101111010010011111100000110001101000011001110110011100111110101110100000010101111001
0000101001101011100000000000011001000110001010010100111011001111111101000101000010101011000100110010010011100101011001011010110110
0010111011000101011111010010100000101011110100010101110100011000110011110000000010011101000101101110111110001100111010110111100011
0110010101011011000011100111101000011011101011110010101000111001111011000010000000101011000100111101101100011101110000011110100010
1100001100000101000100100000001011000010010010010110111011101011100101110110100010101101101011100010011000100100000011101110101110
1110111111101000100010011110110000110101101010011000011010010100001101111101100110000100110110000010000111010000101100011101000100
0000100110011111011111001111110101100001010011011011010010001001011000011111110010100011011101000101001001010111101111100000011110
1100000110000101101101000001100100011000011001001110000001111001101111000101011111010000011110010001001101111101011011010010001001
0000000111111100100101010100011111101100110111101010100110110101100000101011000100001111011000101011011011000100100101110111111100
1100110010010100111001001001111111011001001000100001000010011110000010111001101100100101000101010111001000000101110100100110001110
1101110010101011011110011111100100001000111010010011101010011011110011000111001010001111000101101000000011010111010001011100111001
1111011101010101000100010011000100110100101111101111110001011010111100011101100110110011111100010101000011000010110011101011011100
0010011001111011000111111000100100101100011100101111010101101110101101000001000100100010111011111000010011101111100100011001011000
1100100100101010110101111110111101110100001101011111110111111110000111000111100010011111010010111001101001001101000111100101000110
1100111101010010010000000010010010100000001000100000000011001010101110100111010010110000001011111111000111100011100101011110111110
1001011111111100110110100111100111110111111001011010100001100000111000100001100001110011010100110110110001101110101111100011111010
0110001011011111110110010111111011100101001111111101000100011011000001101111000011001110110010111011011111111110000010001010000010</h2>
          <p>asdfasdflkajasdfasdflkajshdglasdfasdflkajshdglshdgl</p>
          <p>asdfasdflkaasdfasdflkajshdglasdfasdflkajshdgljshdgl</p>
          <p>asdfaasdfasdflkajshdglasdfasdflkajshdglsdflkajshdgl</p>
          <p>asdasdfasdflkajshdglasdfasdflkajshdglfasdflkajshdgl</p>
          <p>asdfasdflkaasdfasdflkajshdglasdfasdflkajshdgljshdgl</p>
        </div>
    )
    return (
      <Col sm={12} md={12} lg={6} >
        {test}
      </Col>
    );
  }

}


const mapStateToProps = (state) =>{
  return{
    x: state.mouse.x,
    y: state.mouse.y
  }
}

export const ConnectedProject1 = connect(mapStateToProps)(Project1)