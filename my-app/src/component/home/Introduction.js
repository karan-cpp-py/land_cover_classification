import React from 'react'
import "../home/Introduction.css"

const Introduction = () => {
  return (
    <div className='intro'>
      <h4>Land cover classification is a critical task in remote sensing, as it provides information
        on the spatial distribution of different land cover types, such as agricultural
        land, forest land, urban areas, and water bodies. Accurate land cover
        information is essential for a range of applications, such as environmental monitoring,
        natural resource management, land-use planning, and climate change
        studies.
        Satellite imagery is a valuable source of information for land cover classification,
        as it provides a synoptic view of large areas at different spatial and
        1
        temporal scales. In recent years, deep learning techniques, such as convolutional
        neural networks (CNNs), have shown promising results for land cover classification
        from satellite imagery. CNNs are able to automatically learn and extract
        relevant features from the imagery, without the need for handcrafted features or
        segmentation algorithms.</h4>
    </div>
  )
}

export default Introduction