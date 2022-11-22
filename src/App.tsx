import Cube from "./components/cube";
import { useState } from "react";

function App() {
  const [cubeColor, setCubeColor] = useState<string>("red");
  const [cubeSize, setCubeSize] = useState<number>(1);
  const [isCubeAnimate, setIsCubeAnimate] = useState<number>(0);
  const [cameraFov, setCameraFov] = useState<number>(75);
  const onCubeColorChange = (e: any) => {
    console.log(e.target.value);
    setCubeColor(e.target.value);
  };
  const onCubeSizeChange = (e: any) => {
    console.log(e.target.value);
    setCubeSize(e.target.value);
  };
  const onIsCubeAnimateChange = (e: any) => {
    console.log(e.target.value);
    setIsCubeAnimate(e.target.value);
  };
  const onFovChange = (e: any) => {
    console.log(e.target.value);
    setCameraFov(e.target.value);
  };
  return (
    <div>
      <div style={styles.conditionWrapper}>
        <div style={styles.conditionEle}>
          <div>颜色：</div>
          <select onChange={onCubeColorChange} value={cubeColor}>
            <option value="red">红色</option>
            <option value="yellow">黄色</option>
            <option value="blue">蓝色</option>
            <option value="green">绿色</option>
          </select>
        </div>
        <div style={styles.conditionEle}>
          <div>尺寸：</div>
          <select onChange={onCubeSizeChange} value={cubeSize}>
            <option value={1}>小</option>
            <option value={2}>中</option>
            <option value={3}>大</option>
          </select>
        </div>
        <div style={styles.conditionEle}>
          <div>相机角度：</div>
          <select onChange={onFovChange} value={cameraFov}>
            <option value={75}>75度</option>
            <option value={45}>45度</option>
          </select>
        </div>
        {/* <select onChange={onIsCubeAnimateChange} value={isCubeAnimate}>
          <option value={0}>停止动画</option>
          <option value={1}>执行动画</option>
        </select> */}
      </div>
      <Cube cubeColor={cubeColor} cubeSize={cubeSize} cameraFov={cameraFov} />
    </div>
  );
}

const styles = {
  conditionWrapper: {
    margin: 10,
    display: 'flex'
  },
  conditionEle: {
    marginRight: 5,
    display: 'flex'
  }
};

export default App;
