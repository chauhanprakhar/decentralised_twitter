import { Component } from "react";
import React from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
  flex: 0.5;
  padding: 40px;
  margin : 20px;
  border-radius: 50px;
  border: 1px;
  border-color: black;
  border-style: solid;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  width: 80px;
  align-items: center;
  background: transparent;
  border-radius: 10px;
  border: 2px solid black;
  color: black;
  height: 40px;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const StyledTextarea = styled.textarea`
   margin-left:5%;
   width: 70%;
   border-radius: 30px;
   padding: 20px;
`;

const Title = styled.p`
  color: #000000;
  font-weight: 150;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

const Description = styled.p`
  color: #000000;
  font-weight: 300;
  font-size: medium;
`

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: #1DA1F2;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }`

class Card extends Component{
    render(){
        return(
    <>          
               <p>&nbsp;</p>
                    <form onSubmit={(event) => {
                      event.preventDefault()
                      const content = this.postContent.value
                      this.props.createPost(content)
                    }}>
                    <Container>
                    <StyledTextarea 
                    id="postContent"
                    type="text"
                    ref={(input) => { this.postContent = input }}
                    className="form-control"
                     />
                    <Button type="submit" >Post</Button>
                   </Container> 
                  </form>
                  <p>&nbsp;</p>
                  { this.props.posts.map((post, key) => {
                    return(
                    <Wrapper key={key}>
                    <div style={{ }}>
                    <Title>From: {post.author}</Title>
                    <Description>
                      {post.content}
                    </Description>
                    <ActionButton
                     name={post.id}
                     onClick={(event) => {
                       let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                       console.log(event.target.name, tipAmount)
                       this.props.tipPost(event.target.name, tipAmount)
                     }}
                    >Tip 0.1 eth</ActionButton>
                     </div>
                     </Wrapper>
                    )
                  })}
             </>
        )
    }}
    export default Card;