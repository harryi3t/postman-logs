import React from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

const baseStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  fontSize: '30px'
}
const textStyle = {
  margin: 'auto'
};

const TargetBox = (props) => {
  const { onDrop } = props
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      if (onDrop) {
        onDrop(props, monitor)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  const boxStyle = Object.assign({}, baseStyle, {position: isActive ? 'static' : 'absolute' });

  return (
    <div ref={drop} style={boxStyle}>
      <span style={textStyle}>
        {isActive ? 'Release to drop' : ''}<br/>
      </span>
    </div>
  )
}
export default TargetBox