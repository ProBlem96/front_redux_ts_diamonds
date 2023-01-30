import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Daimond from '../../models/Daimond';
import {
    getDaimonds,
    getAvgCut,
    getIdeal,
    getMax,
    getMean,
    getPremium,
    getPriceAvg,
    addDaimond,
    delDaimond,
    updDaimond
} from './daimondAPI';

export interface daimondState {
    daimonds: Daimond[]
    updateFlag: boolean
    avg_cut: []
    ideal: []
    max: []
    mean: []
    premium: []
    price_avg: []
}

const initialState: daimondState = {
    daimonds: [],
    updateFlag: false,
    avg_cut: [],
    ideal: [],
    max: [],
    mean: [],
    premium: [],
    price_avg: []


};

export const getDaimondsAsync = createAsyncThunk(
    'daimond/getDaimonds',
    async () => {
        const response = await getDaimonds();
        return response.data;
    }
);

export const getAvgCutAsync = createAsyncThunk(
    'daimond/getAvgCut',
    async () => {
        const response = await getAvgCut();
        return response.data;
    }
);

export const getIdealAsync = createAsyncThunk(
    'daimond/getIdeal',
    async () => {
        const response = await getIdeal();
        return response.data;
    }
);

export const getMaxAsync = createAsyncThunk(
    'daimond/getMax',
    async () => {
        const response = await getMax();
        console.log(response.data)
        return response.data;
    }
);

export const getMeanAsync = createAsyncThunk(
    'daimond/getMean',
    async () => {
        const response = await getMean();
        return response.data;
    }
);

export const getPremiumAsync = createAsyncThunk(
    'daimond/getPremium',
    async () => {
        const response = await getPremium();
        return response.data;
    }
);

export const getPriceAvgAsync = createAsyncThunk(
    'daimond/getPriceAvg',
    async () => {
        const response = await getPriceAvg();
        return response.data;
    }
);

export const updDaimondAsync = createAsyncThunk(
    'daimond/updDaimond',
    async (new_daimond: Daimond) => {
        //  console.log({new_daimond})
        const response = await updDaimond(new_daimond);
        return response.data;
    }
);

export const addDaimondAsync = createAsyncThunk(
    'daimond/addDaimond',
    async (new_daimond: Daimond) => {
        const response = await addDaimond(new_daimond);
        return response.data;
    }
);

export const delDaimondAsync = createAsyncThunk(
    'daimond/delDaimond',
    async (id: number) => {
        const response = await delDaimond(id);
        return response.data;
    }
);


export const daimondSlice = createSlice({
    name: 'daimond',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDaimondsAsync.fulfilled, (state, action) => {
                state.daimonds = action.payload;
            })
            .addCase(getAvgCutAsync.fulfilled, (state, action) => {
                console.log(action)
                state.avg_cut = action.payload;
            })
            .addCase(getIdealAsync.fulfilled, (state, action) => {
                state.ideal = action.payload;
            })
            .addCase(getMaxAsync.fulfilled, (state, action) => {
                state.max = action.payload;
            })
            .addCase(getMeanAsync.fulfilled, (state, action) => {
                state.mean = action.payload;
            })
            .addCase(getPremiumAsync.fulfilled, (state, action) => {
                state.premium = action.payload;
                state.updateFlag =! state.updateFlag;
                
            })
            .addCase(getPriceAvgAsync.fulfilled, (state, action) => {
                state.price_avg = action.payload;
            })

            .addCase(addDaimondAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                  state.daimonds.push( action.payload);
                state.updateFlag =! state.updateFlag;
            })
            .addCase(delDaimondAsync.fulfilled, (state, action) => {

                state.daimonds.filter(d => d.ID != action.payload);
                //   console.log(state.daimonds)
                state.updateFlag =! state.updateFlag;
            })
            .addCase(updDaimondAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.updateFlag =! state.updateFlag;
            });

    },
});

export const { } = daimondSlice.actions;
export const selectdaimonds = (state: RootState) => state.daimond.daimonds;
export const selectUpdate = (state: RootState) => state.daimond.updateFlag;
export const selectAvgCut = (state: RootState) => state.daimond.avg_cut;
export const selectIdeal = (state: RootState) => state.daimond.ideal;
export const selectMax = (state: RootState) => state.daimond.max;
export const selectMean = (state: RootState) => state.daimond.mean;
export const selectPremium = (state: RootState) => state.daimond.premium;
export const selectAvgPrice = (state: RootState) => state.daimond.price_avg;
export default daimondSlice.reducer;