import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_URL } from "../../utils/constants";
import axios from "axios";
import { RootState } from "..";

const API_KEY = import.meta.env.VITE_YOTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtubeApp/home/PageVideos",
    async(isNext:boolean, {getState}) =>{
        const {
            youtubeApp : {nextPageToken: nextPageTokenFromState, videos},
        } = getState() as RootState;
        const {data:{items,nextPageToken}} = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects&key=${API_KEY}&part=snippet&type=video`);
        console.log(items)
    }
)