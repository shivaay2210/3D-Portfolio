import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress()

  return (
    <div>Loader</div>
  )
}

export default Loader