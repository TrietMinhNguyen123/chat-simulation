import React, {useState, useEffect} from "react";
import addChat from "../img/addChat.png";
import setting from "../img/setting.png";
import policy from "../img/policy.png"


function toggleTheme(selectedValue){
  const themeElement = document.getElementById("Chatpage");
  if (selectedValue == "dark") {
    themeElement.classList.remove("dark")
  } else {
    themeElement.classList.add("dark");
  }
}

function toggleFont(selectedValue){
  const themeElement = document.getElementById("Chatpage");
  if (selectedValue == "small"){
  themeElement.classList.add("small-font")
  themeElement.classList.remove("large-font")
  } else if(selectedValue == "large"){
    themeElement.classList.remove("small-font")
    themeElement.classList.add("large-font")
  } else {
    themeElement.classList.remove("small-font")
    themeElement.classList.remove("large-font")
  }
}

function Sidebar(){
    const [openModal, setOpenModal] = useState(null);
    return(
    <>
        {openModal && <div className="overlay" onClick={() => setOpenModal(null)}></div>}        
        <div id ="sidebar" className='Side_bar'>
          <div className="UI_feature">
          <div id='NewChat' className="Content_container">
            <img className="addchat" src={addChat}></img>
            <p className='text_ui'>New Chat</p>
          </div>
          <div id='Setting' className="Content_container">
            <img className="setting" onClick={() => setOpenModal("setting")}src={setting}></img>
            <p className='text_ui'onClick={() => setOpenModal("setting")}>Setting</p>
          </div>
          <div id='Policy' className="Content_container pb-7">
            <img className="policy" onClick={() => setOpenModal("policy")} src={policy}></img>
            <p className='text_ui' onClick={() => setOpenModal("policy")}>Policy</p>
          </div>
          <div className='seperate_line'>
          </div>
          </div>
        </div>

        {openModal ==="setting" && (
            <div className="modal">
            <h2>Settings</h2>
            <label>
               Mode:
              {/* <select>
                <option value="light" onClick={toggleTheme}> Light</option>
                <option value="dark" onClick={toggleTheme}> Dark</option>
              </select> */}
              <select onChange={(e) => toggleTheme(e.target.value)}>
                <option value="dark">Light</option>
                <option value="light">Dark</option>
              </select>
            </label>
            <label>
              Font Size:
              <select onChange={(e) => toggleFont(e.target.value)}>
                <option value="small">Small</option>
                <option value="medium" selected>Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
            <button className="exits" onClick={() => setOpenModal(null)}>X</button>
          </div>
        )}
        {openModal === "policy" && (
            <div className="modal">
            <h2> General Policy</h2>
            <h1>
            To maximize innovation and creativity, we believe that you should be flexible in your use of our services as you see fit, as long as you comply with the law and do not harm yourself or others. When using any OpenAI service, such as ChatGPT, labs.openai.com, and the OpenAI API, these rules apply: 
            <br/><br/>

1. Comply with applicable laws - for example, do not invade the privacy of others, engage in regulated activity that does not comply with applicable regulations, or promote or engage in any illegal activity, including the exploitation or harm of children, or the development or distribution of illegal substances, goods, or services.
<br/><br/>
2. Do not use our services to harm yourself or others - for example, do not use our services to encourage suicide or self-harm, develop or use weapons, injure others or destroy property, or engage in illegal activities that breach the security of any other service or system.
<br/><br/>

3. Do not reuse or distribute results from our services to harm others - for example, do not share results from our services to scam, fraud, spam, mislead, bully, harass, defame, discriminate based on protected characteristics, promote child pornography, or promote violence, hatred, or distress of others.
<br/><br/>

Respect our safeguards - do not remove safeguards or safety mitigations in our services unless supported by OpenAI (e.g., domain experts in our Red Team Network)⁠ or related to research conducted in accordance with our Sharing and Release Policy⁠. We specifically report child sexual abuse (CSAM) to the National Center for Missing and Exploited Children.
            </h1>
            <button className="exits" onClick={() => setOpenModal(null)}>X</button>
          </div>
        )}
    </>
    )

}

export default Sidebar;