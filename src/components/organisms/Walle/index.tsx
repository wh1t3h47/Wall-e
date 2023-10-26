import "./index.css";
const Walle = () => (
  <div className="flex justify-center">
    <div className="wall-e">
      <div className="head-container">
        <div className="eyes-container">
          <div className="left eye">
            <div className="screw screw-1"></div>
            <div className="screw screw-2"></div>
            <div className="screw screw-3"></div>
            <div className="pupil"></div>
          </div>
          <div className="right eye">
            <div className="screw screw-1"></div>
            <div className="screw screw-2"></div>
            <div className="screw screw-3"></div>
            <div className="pupil"></div>
          </div>
        </div>
        <div className="head"></div>
        <div className="neck-container">
          <div className="neck-top"></div>
          <div className="neck-bottom"></div>
        </div>
      </div>
      <div className="body-container">
        <div className="left arm"></div>
        <div className="body">
          <div className="body-top">
            <div className="box">
              <div className="line"></div>
            </div>
            <div className="center">
              <div className="lcd"></div>
              <div className="button"></div>
            </div>
            <div className="box"></div>
          </div>
          <div className="text mb-2">
            <div className="text-full">
              WALL·<span className="text-e">E</span>
            </div>
            <div className="red-circle"></div>
          </div>
        </div>
        <div className="right arm"></div>
      </div>
      <div className="hands-container">
        <div className="left hand">
          <div className="palm-container">
            <div className="palm"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-left"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-right"></div>
          </div>
          <div className="piece-container">
            <div className="piece bottom-left"></div>
          </div>
          <div className="piece-container">
            <div className="piece bottom-right"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-center"></div>
          </div>
        </div>
        <div className="right hand">
          <div className="palm-container">
            <div className="palm"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-left"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-right"></div>
          </div>
          <div className="piece-container">
            <div className="piece bottom-left"></div>
          </div>
          <div className="piece-container">
            <div className="piece bottom-right"></div>
          </div>
          <div className="piece-container">
            <div className="piece top-center"></div>
          </div>
        </div>
      </div>
      <div className="wheels-container">
        <div className="left wheel">
          <div className="wheel-left-part"></div>
          <div className="wheel-right-part">
            <div className="wheel-container">
              <div className="wheel-top"></div>
            </div>
            <div className="wheel-container">
              <div className="wheel-bottom"></div>
            </div>
            <div className="wheel-tube"></div>
          </div>
        </div>
        <div className="right wheel">
          <div className="wheel-left-part"></div>
          <div className="wheel-right-part">
            <div className="wheel-container">
              <div className="wheel-top"></div>
            </div>
            <div className="wheel-container">
              <div className="wheel-bottom"></div>
            </div>
            <div className="wheel-tube"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Walle;
