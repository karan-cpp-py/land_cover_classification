import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import "./Example.css"
import DoughnutChart from "../doughnut_chart/DoughnutChart";

const ShippingLabel = (props) => {
    const url = 'https://storage.googleapis.com/acps-project-backend.appspot.com/Images/test_image.png?Expires=1768231104&GoogleAccessId=firebase-adminsdk-gr0xg%40acps-project-backend.iam.gserviceaccount.com&Signature=R3oJJmBFaUDmB8RPn%2B7CWWrqyv%2BPtjbd7v9ZH4CtuLcCwUYeIDgUs496tKuzfJh%2F5WN6KWjmcB2zol%2FNhadCCjtoYC6KIbkN%2BlhkSr8E7oXt2JMhqs3IOBW83uWJoFUFkEW4YHSfSRbvQlkCJuvoDWOEObSajPjRyptQaPgs6xjxxinq7PD%2BTdpGWfeBfur9QcXXd2ZqBWb2YdfqTiXuzkwBvPrr8OHizm6FVZ%2BbvFAtir5%2BKVZiZprvQoUXvFp2B%2Bo2XAJgddxcJt5dSfJU4SiA3jCdoteIPD5DubRY7bwowxEtS75jNkzwBB%2BoaCtAxM1EE1MNfjwxXtYS56hIyA%3D%3D'

    const [data, setData] = useState([2,3,5]);
    const [labels, setLabels] = useState([
        "other",
        "agricultural land",
        "forests"
    ]);

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
        const data = await html2canvas(document.querySelector("#parent-grid"));
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
        <div id="result-container" className='flex-center'>
            <div id='parent-grid'>
                <div id='selected-img' className='result-item'>
                    <img src={image2} alt="Image 2" className='result-img'/>
                    <figcaption class='caption'>Selected satellite image</figcaption>
                </div>
                <div id='mask-img' className='result-item'>
                    <img src={image1} alt="Image 1" className='result-img'/>
                    <figcaption class='caption'>Generated Mask</figcaption>
                </div>
                <div id='graph-img' className='result-item flex-center'>
                    <div id='analysis-container'>
                        <div id='analysis-graph' className='flex-center'>
                            <DoughnutChart data={data} labels={labels} />
                        </div>
                        <div id='analysis-text' className='flex-center'>
                            <h4><b>Analysis Result</b></h4>
                            <br/>
                            <p>Agricultural land : <b>30%</b></p>
                            <p>Forest land : <b>50%</b></p>
                            <p>Others : <b>20%</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-btn flex-center' onClick={createPDF}>
                Download as PDF
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
