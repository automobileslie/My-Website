import React from 'react';
// import { pdfjs } from 'react-pdf';

class Home extends React.Component{

    state={
        currentImage: 0

    }

    componentDidMount=()=>{

        let settingInterval=()=>{
            if (this.state.currentImage <= 0) {
                this.setState({
            currentImage: this.state.currentImage + 1})
        }
            
            else {
                this.setState({
                    currentImage: this.state.currentImage -1 
                })
            }
        }

        setInterval(settingInterval, 5000)

    }

    renderImages=()=>{

        const imagesForHomePage= [
            {img: "./Images/a_zinnia.jpg", name: "pink Zinnia"}, 
            {img: "./Images/profile_photo.jpg", name: "profile picture"},


        ]
        

        return <div>     
                    <img className="images-for-homepage" src={require(`${imagesForHomePage[this.state.currentImage].img}`)} alt={imagesForHomePage[this.state.currentImage].name} />
             </div>

    }



render(){    

return (
    <div className="body">
        <h1>Carlie Anglemire</h1>
        <br></br>
        <div>{this.renderImages()}
        </div>


    </div>
)
}


}

export default Home;