import React, { useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import "./Example.css"

const ShippingLabel = (props) => {
    useEffect(() => {
        console.log('Classify Component mounted!');
        console.log(props.coords)
    }, []);

    // const createPDF = async () => {
    //   const pdf = new jsPDF("portrait", "pt", "a4");
    //   const data = await document.querySelector("#pdf");
    //   pdf.html(data).then(() => {
    //     pdf.save("shipping_label.pdf");
    //   });
    // };

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector("#main"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("land_cover_classification.pdf");
    };

    const textStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
    };

    return (
        <div id="main">
            <div className='parent'>
                <div className='child1'>
                    <img src={image1} alt="Image 1" />
                </div>
                <div className='child2'>
                    <img src={image2} alt="Image 2" />
                </div>
                <div className='child3'>
                    <img src={image3} alt="Image 3" />
                </div>
                <div className='child4'>
                    <button onClick={createPDF} type="button">
                        Download
                    </button>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        coords : state.selected_coordinates
    }
}

export default connect(mapStateToProps)(ShippingLabel);
