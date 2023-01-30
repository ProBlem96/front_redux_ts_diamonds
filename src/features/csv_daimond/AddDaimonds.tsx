import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Daimond from '../../models/Daimond';
import { selectdaimonds, selectUpdate, addDaimondAsync, getDaimondsAsync } from './daimondSlice';


const AddDaimonds = () => {
  const daimonds = useAppSelector(selectdaimonds);
  const Flag = useAppSelector(selectUpdate);
  const dispatch = useAppDispatch();

  const [carat, setCarat] = useState(0)
  const [clarity, setClarity] = useState('')
  const [color, setColor] = useState('')
  const [cut, setCut] = useState('')
  const [depth, setDepth] = useState(0)
  const [price, setPrice] = useState(0)
  const [table, setTable] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)


  const new_daimond = () => {
    const new_daimond: Daimond =
    {
      carat: carat, clarity: clarity, color: color, cut: cut,depth: depth,price: price,table: table,x: x,y: y,z: z
    }
    dispatch(addDaimondAsync(new_daimond))
  }
  return (
    <div><hr></hr> <h3>Daimonds <br></br> Add new daimond </h3>



      carat:    <input placeholder='carat:number' onChange={(e) => setCarat(+e.target.value)} />
      clarity:  <input placeholder='clarity' onChange={(e) => setClarity(e.target.value)} />
      color:  <input placeholder='color' onChange={(e) => setColor(e.target.value)} />
      cut:  <input placeholder='cut' onChange={(e) => setCut(e.target.value)} />
      depth:  <input placeholder='depth:number' onChange={(e) => setDepth(+e.target.value)} />
      price:  <input placeholder='price:number' onChange={(e) => setPrice(+e.target.value)} /><br></br>
      table:  <input placeholder='table:number' onChange={(e) => setTable(+e.target.value)} />
      x:  <input placeholder='x:number' onChange={(e) => setX(+e.target.value)} />
      y:  <input placeholder='y:number' onChange={(e) => setY(+e.target.value)} />
      z:  <input placeholder='z:number' onChange={(e) => setZ(+e.target.value)} />
      <br></br>
      <button onClick={() => new_daimond()}>Add new daimond</button>
      <hr></hr>
    </div>
  )
}

export default AddDaimonds