import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import image1 from "./image2.png"
import './CropImage.css'

const CropImage = () => {

  const [srcImg, setSrcImg] = useState(image1);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(image1);

  const getCroppedImg = async () => {
    try {
      if (!image) {
        console.log("Image not loaded yet");
        return;
      }
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const scale = 1;
      canvas.width = crop.width * scale;
      canvas.height = crop.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg");
      setResult(base64Image);
    } catch (e) {
      console.log("Error cropping the image:", e);
    }
  };

  const onLoad = (img) => {
    setImage(img);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(result);
  };

  const downloadImage = () => {
    if (!result) {
      console.log("No cropped image found");
      return;
    }
    const byteString = atob(result.split(",")[1]);
    const mimeString = result.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cropped-image.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  return (
    <div className="crop-container">
      <div id='parent-grid'>
        <div id='heading'>
          <h6>Select a part of image for analysis and click <b>Confirm</b> to proceed</h6>
        </div>
        <div id='uncropped-img' className='image'>
          {srcImg && (
              <div style={{ width: "100%", height: "100%" }}>
                <ReactCrop
                  style={{ width: "100%", height: "90%" }}
                  crop={crop}
                  onChange={(new_crop) => {
                    setCrop(new_crop);
                    getCroppedImg();
                  }}
                >
                  <img src={srcImg} onLoad={e => onLoad(e.target)} />
                </ReactCrop>
                {/* <button className="cropButton" onClick={getCroppedImg}>
                  crop
                </button> */}
              </div>
            )}
        </div>
        <div id='cropped-img' className='image'>
          {result && (
            <div style={{ width: "100%", height: "100%" }}>
              <img src={result} alt="cropped image" />
            </div>
          )}
          <button className="downloadButton" onClick={downloadImage}>
            download
          </button>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-6">
          <h1> Select an image for selecting mask </h1>
        </div>
        <div>
          {srcImg && (
            <div>
              <ReactCrop
                style={{ maxWidth: "50%", maxHeight: "50%" }}
                crop={crop}
                onChange={setCrop}
              >
                <img src={srcImg} onLoad={e => onLoad(e.target)} />
              </ReactCrop>
              <button className="cropButton" onClick={getCroppedImg}>
                crop
              </button>
            </div>
          )}
          {result && (
            <div className="col-6">
              <h1> cropped image </h1>
              <img src={result} alt="cropped image" width={500} height={500}/>
            </div>
          )}
          <button className="downloadButton" onClick={downloadImage}>
            download
          </button>

        </div>
      </div> */}
    </div>
  );
};

export default CropImage;
