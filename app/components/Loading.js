import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

let intervalId;
const Loading = ({text= 'Loading', speed = 300}) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    intervalId = window.setInterval(() => {
      setContent((content) => content === `${text}...` ? text : `${content}.`)
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

export default Loading;

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}
