import React from 'react'
import '../App.css'
import memesData from '../memesData'

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/9vct.jpg"
    })
    const [randomImage, setRandomImage] = React.useState(memesData)

    function getMemeImage(){
        const allData = randomImage.data.memes
        const randomNumber = Math.floor(Math.random() * allData.length)
        const url = allData[randomNumber].url

        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage:url
        }))
    }
    function handleChange(event){
        const {name,value}= event.target
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={memeImage.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={memeImage.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}