
import { angles } from "../cores/importLayers";

const Bar = ({selectedAngleID}) => {
  const typeStyle = {
      position: 'absolute',  // 絶対位置指定を追加
      top: '50%',           // 上から50%の位置に設定
      left: '50%',          // 左から50%の位置に設定
      transform: 'translate(-50%, -50%)', // 位置のオフセットを調整して完全に中央に
      textAlign: 'center',  // テキストを水平方向に中央寄せ
      fontSize: '1.2rem'
  };

  return (
      <span style={typeStyle}>
        {`${angles[selectedAngleID].MEMO}`}
      </span>
  )
}

export default Bar;