// This is just a test for more interface features!!!


import React, { useState, useEffect,} from "react";

export default function BackgroundColorPicker({themeMode}){
    const [color1, setColor1] = useState("#B7E4C7")
    const [color2, setColor2] = useState("#52B788")

    useEffect(() =>{
        const saved = JSON.parse(localStorage.getItem("gradientColors"));
        if (saved){
            setColor1(saved.color1);
            setColor2(saved.color2);
            applyGradient(saved.color1,saved.color2,themeMode);
        } else (
            applyGradient("#B7E4C7", "#52B788", themeMode)
        )
    }, []);

    useEffect(() =>{
        applyGradient(color1, color2, themeMode)
    },[themeMode]);

    const applyGradient = (c1, c2, mode) => {
        const root = document.getElementById("Chatpage");
        const endColor = mode === "dark" ? "#0000" : c2;

        root.style.setProperty("--color1",c1);
        root.style.setProperty("--color2",endColor);
    };

    const handleColor1Change = (e) =>{
        const newColor1 = e.target.value
        setColor1(newColor1)
        applyGradient(newColor1, color2, themeMode);
        saveColor(newColor1, color2, themeMode);
    }
    const handleColor2Change = (e) =>{
        const newColor2 = e.target.value
        setColor2(newColor2)
        applyGradient(color1, newColor2, themeMode);
        saveColor(color1, newColor2, themeMode);
    }

    const saveColor = (c1,c2) => {
        localStorage.setItem("gradientColors", JSON.stringify({color1 : c1, color2: c2}))
    }
    return(
      <>
      <h2>
        Background Color Change:
      </h2>
      <label>
        Start Color:
        <input type="color" value={color1} onChange={handleColor1Change}/>
      </label>
      <label>
        End Color:
        <input type="color" value={color2} onChange={handleColor2Change}/>
      </label>
      {themeMode === "dark" && <p className="note">In dark mode, Color 2 is automatically black.</p>  }
      </>  
    )
}
