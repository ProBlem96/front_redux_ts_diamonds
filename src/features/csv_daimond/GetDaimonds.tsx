import React, { useEffect, useState } from 'react'
import { } from 'react-redux'
import { getDaimondsAsync, selectdaimonds, selectUpdate, delDaimondAsync, updDaimondAsync } from './daimondSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Daimond from '../../models/Daimond';

const ConDaimonds = () => {

  const [search, setsearch] = useState("")
  const daimonds = useAppSelector(selectdaimonds);
  const dispatch = useAppDispatch();
  const updateFlag = useAppSelector(selectUpdate);
  const [newcarat, setnewcarat] = useState(0)



  useEffect(() => {
    dispatch(getDaimondsAsync())
  }, [updateFlag])



  const upd_daimond = (
    FirstID: number,
    FirstPrice: number,
    FirstClarity: string,
    FirstColor: string,
    FirstCut: string,
    FirstDepth: number,
    FirstTable: number,
    FirstX: number,
    FirstY: number,
    FirstZ: number) => {
    const new_daimond: Daimond = {ID: FirstID,clarity: FirstClarity,color: FirstColor,price: FirstPrice,
      cut: FirstCut,depth: FirstDepth,table: FirstTable,x: FirstX,y: FirstY,z: FirstZ,carat: newcarat
    }
    dispatch(updDaimondAsync(new_daimond))

  }

  return (
    <div>

       <h4>all daimonds<br></br> search byspecific color, update by carat and Delete</h4>

      <input placeholder='search daimond by color..' onChange={(e) => setsearch(e.target.value)} />
      <br></br>
      <input placeholder='update carat' onChange={(e) => setnewcarat(+ e.target.value)}></input>
      <br></br>
      <br></br>


      {daimonds.filter(daim => daim.color.includes(search)).map((daim, i) => <div key={i}>
        

        id : {daim.ID}
        carat: {daim.carat},
        clarity:  {daim.clarity},
        color : {daim.color},
        cut :{daim.cut},<br></br>
        depth :{daim.depth},
        price :{daim.price},
        table :{daim.table},
        x :{daim.x},
        y :{daim.y},
        z :{daim.z}<br></br>
        <button onClick={() => dispatch(delDaimondAsync(daim.ID || -1))}>Delete</button>
        <button onClick={() => upd_daimond(
          daim.ID || -1,daim.carat,daim.clarity,daim.color,daim.cut,daim.depth,daim.table,daim.x,daim.y,daim.z)}>Update</button>
        <hr></hr>
        

      </div>)}
    </div>
  )
}

export default ConDaimonds