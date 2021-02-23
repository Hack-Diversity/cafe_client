import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  background: rgba(255,255,255,.10);
  padding: 50px 30px 50px;
  margin: auto;
`

const Footer = () => (
  <Foot>
      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.pantlitz.dev"> Patricia Antlitz </a>
      for <a href="https://www.hackdiversity.com/"> Hack.Diversity </a> <a href="https://github.com/orgs/Hack-Diversity/teams/dehack21_moose">
      Moose Team.</a>
  </Foot>

)

export default Footer
