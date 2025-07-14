import React, {useState, useEffect} from "react";
import addChat from "../img/addChat.png";
import setting from "../img/setting.png";
import policy from "../img/policy.png"

function Sidebar(){
    const [showSetting, setShowSetting] = useState(false);
    const [theme, setTheme] = useState("light");
    return(
    <>
        {showSetting && <div className="overlay" onClick={() => setShowSetting(false)}></div>}        
        <div className='Side_bar'>
          <div className="UI_feature">
          <div id='NewChat' className="Content_container">
            <img className="addchat" src={addChat}></img>
            <p className='text_ui'>New Chat</p>
          </div>
          <div id='Setting' className="Content_container">
            <img className="setting" onClick={() => setShowSetting(true)}src={setting}></img>
            <p className='text_ui'onClick={() => setShowSetting(true)}>Setting</p>
          </div>
          <div id='Policy' className="Content_container pb-7">
            <img className="policy" src={policy}></img>
            <p className='text_ui'>Policy</p>
          </div>
          <div className='seperate_line'>
          </div>
          </div>
        </div>

        {showSetting && (
            <div className="settings_modal">
            <h2>Settings</h2>
            <label>
               Mode:  
              <select value={theme} onChange={((e) => setTheme(e.target.value))}>
                <option value="light"> Light</option>
                <option value="dark"> Dark</option>

              </select>
            </label>
            <label>
              Font Size:
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </label>
            <button className="exits_setting" onClick={() => setShowSetting(false)}>X</button>
          </div>
        )}
    </>
    )
}

export default Sidebar;