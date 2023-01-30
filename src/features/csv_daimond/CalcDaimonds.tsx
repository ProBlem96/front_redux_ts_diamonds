import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Daimond from '../../models/Daimond';
import {
    selectdaimonds,
    selectAvgCut,
    selectAvgPrice,
    selectIdeal,
    selectMax,
    selectMean,
    selectPremium,
    selectUpdate,
    getDaimondsAsync,
    getAvgCutAsync,
    getIdealAsync,
    getMaxAsync,
    getMeanAsync,
    getPremiumAsync,
    getPriceAvgAsync
} from './daimondSlice';


export function CalcDaimonds() {
    const daimonds = useAppSelector(selectdaimonds);
    const updateFlag = useAppSelector(selectUpdate);
    const avgCut = useAppSelector(selectAvgCut);
    const ideal = useAppSelector(selectIdeal);
    const max = useAppSelector(selectMax);
    const mean = useAppSelector(selectMean);
    const premium = useAppSelector(selectPremium);
    const avg_price = useAppSelector(selectAvgPrice);

  
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((getDaimondsAsync()))
    }, [updateFlag])

    return (
        <div>
  
            <h4>Daimonds calc</h4> <br/>

            <button onClick={() => dispatch(getMaxAsync())}>present max price </button>

            {max.map((max, i) => <div key={i}>{max}</div>)}
            <br/><br/>
            

            <button onClick={() => dispatch(getMeanAsync())}>present average price</button>

            {mean.map((mean, i) => <div key={i}>{mean}</div>)}
            <br/><br/>
            

            <button onClick={() => dispatch(getAvgCutAsync())}>present average carat by each cut</button>

            {avgCut.map((avgCut, i) => <div key={i}>{avgCut}</div>)}
            <br/><br/>
            

            <button onClick={() => dispatch(getIdealAsync())}>present ideal type quantity</button>

            {ideal.map((idal, i) => <div key={i}>{idal}</div>)}
            <br/><br/>
            

            <button onClick={() => dispatch(getPremiumAsync())}>present median carat of premium</button>

            {premium.map((premium, i) => <div key={i}>{premium}</div>)}
            <br/><br/>
            

            <button onClick={() => dispatch(getPriceAvgAsync())}>
            present average price<br/>
            of each type of color
            </button>

            {avg_price.map((avg_price, i) => <div key={i}>{avg_price}</div>)}
            <br/><br/>
            

            <hr></hr>

        </div>
    );
}