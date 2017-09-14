import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Sai Charan Chinta`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '100%'
          }}
        />
        Written by <strong>Sai Charan</strong> who lives and works in Hyderabad.{' '}
        <a href="https://twitter.com/ChariOfficial" target="_blank">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
