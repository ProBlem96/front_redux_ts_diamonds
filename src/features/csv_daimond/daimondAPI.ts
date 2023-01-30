import axios from "axios";
import Daimond from "../../models/Daimond";
import {
    MY_SERVER,
    MY_SERVER_ADD_DAIMOND,
    MY_SERVER_DEL_DAIMOND,
    MY_SERVER_UPD_DAIMOND,
    MY_SERVER_AVG_CUT,
    MY_SERVER_IDEAL,
    MY_SERVER_MAX,
    MY_SERVER_MEAN,
    MY_SERVER_PREMIUM,
    MY_SERVER_PRICE_AVG,
    
    
} from "../../serv"
import { Dictionary } from "@reduxjs/toolkit";

export function getDaimonds() {
    return new Promise<{ data: Daimond[] }>((resolve) =>
        axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
    );
}

export function getAvgCut() {
    return new Promise<{ data: []}>((resolve) =>
        axios.get(MY_SERVER_AVG_CUT).then(res => resolve({ data: res.data }))
    );
}

export function getIdeal() {
    return new Promise<{ data: [] }>((resolve) =>
        axios.get(MY_SERVER_IDEAL).then(res => resolve({ data: res.data }))
    );
}

export function getMean() {
    return new Promise<{ data: [] }>((resolve) =>
        axios.get(MY_SERVER_MEAN).then(res => resolve({ data: res.data }))
    );
}

export function getMax() {
    return new Promise<{ data: [] }>((resolve) =>
        axios.get(MY_SERVER_MAX).then(res => resolve({ data: res.data }))
    );
}

export function getPremium() {
    return new Promise<{ data: [] }>((resolve) =>
        axios.get(MY_SERVER_PREMIUM).then(res => resolve({ data: res.data }))
    );
}

export function getPriceAvg() {
    return new Promise<{ data: []}>((resolve) =>
        axios.get(MY_SERVER_PRICE_AVG).then(res => resolve({ data: res.data }))
    );
}


export function addDaimond(new_daimond: Daimond) {
    return new Promise<{ data:  Daimond}>((resolve) =>
        axios.post(MY_SERVER_ADD_DAIMOND, new_daimond).then(res => resolve({ data: new_daimond }))
    );
}


export function delDaimond(id : number) {
    return new Promise<{ data: number }>((resolve) =>
        axios.delete(MY_SERVER_DEL_DAIMOND + id).then(res => resolve({ data: id }))
    );
}

export function updDaimond(new_daimond: Daimond) {
    return new Promise<{ data: Daimond }>((resolve) =>
        axios.put(MY_SERVER_UPD_DAIMOND, new_daimond).then(res => resolve({ data: new_daimond }))
    );
}