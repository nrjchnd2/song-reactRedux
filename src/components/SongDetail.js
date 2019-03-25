import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({song})=>{
    if(!song){
        return (
            <div>Select a song</div>
        );
    }
    console.log(song);
    return (
        <div>
            <h3>Song Details</h3>
            <p>
                Title:{song.song.title}
                <br/>
                Duration:{song.song.duration}
            </p>
        </div>
    );
};
const mapStateToProps=(state)=>{
    return {song:state.songSelected};
}

export default connect(mapStateToProps) (SongDetail);