import {combineReducers} from 'redux';

const songListReducer=()=>{
    return [
        {title:'i wanna do it again',duration:'2.03'},
        {title:'sexy bitch',duration:'4.09'},
        {title:'waka waka',duration:'5:45'},
        {title:'descapito',duration:'6:41'}
    ]
};

const songSelectedReducer=(selectedSong=null,action)=>{
    if(action.type==='SELECT_SONG'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songListReducer,
    songSelected:songSelectedReducer
});