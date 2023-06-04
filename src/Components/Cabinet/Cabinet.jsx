import React, { useEffect, useState } from "react";
import './cabinet.css'


const Cabinet = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Час, протягом якого повідомлення буде відображатися (в мілісекундах)
    };
  
    return (
      <div>
        <h1 className="home">Cabinet</h1>
<h1 className="home">Cabinet</h1>
<h1 className="home">Cabinet</h1>
<h1 className="home">Cabinet</h1>
<h1 className="home">Cabinet</h1>
<h1 className="home">Cabinet</h1>
        {showMessage && (
          <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
            Це випливаюче повідомлення!
          </div>
        )}
        <button onClick={handleButtonClick}>Показати повідомлення</button>
      </div>
    );
  };
  
export default Cabinet