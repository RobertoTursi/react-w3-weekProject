import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"

const SingleSong = ({song}) => {

    const dispatch = useDispatch()
    const array = useSelector(state => state.arrayOfSavedSong)
    const windowLocation = useLocation()

    const saveSong = () => {
        if(!array.includes(song)){
            dispatch({
                type: "LIKED_SONG",
                payload: song
            })
        }
    }

    


    return(
         <div key={song.id} >
                       <img onClick={() => {dispatch({type: "ADD_SELECTED", payload: song})}} src={song.album.cover} alt="" />
                       <div><p>{song.album.title}</p>
                        {windowLocation.pathname !== "/library" && <button onClick={saveSong}>salva</button>}
                        {windowLocation.pathname === "/library" && <button onClick={() => {dispatch({type: "DELETE_SONG", payload: song})}}>rimuovi</button>}
                        </div>
         </div>
        
    )
}

export default SingleSong