import Text from "../../../public/general/text.png";

const Layers = () => {
  return (
    <div className="layers">
      <div className="layersTitle">
        <h3>Layers</h3>
        <p>Select a layer to edit</p>
      </div>
      <div className="layer">
        <div className="layerImg">
          <img src={Text} alt="" width={48} height={48} />
        </div>
        <span>Add Text</span>
      </div>
      <div className="layer">
        <div className="layerImg" style={{ backgroundColor: "teal" }}></div>
        <span>Canvas</span>
      </div>
    </div>
  );
};

export default Layers;
