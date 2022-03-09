import React, { useEffect,useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import getGifs from '../helpers/GetGifs';
export const GifGrid = ({anime}) => {

    const {data:images,loading} = useFetchGifs(anime);

  return (
    <>
        <div>{anime}</div>
      <div className='card-grid'>
          {loading && <p>Loading</p>}
                {
                    images.map( (img) => (
                        <GifGridItem  key={img.id}
                        {...img}
                        />
                        ))
                } 
      </div>
    </>
  )
}
