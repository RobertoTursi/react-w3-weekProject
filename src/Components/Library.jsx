import { useSelector } from "react-redux"
import SingleSong from "./singleSong"

const Library = () => {
    const array = useSelector(state => state.arrayOfSavedSong)

    return(
        array.map(song => (
            <SingleSong song={song}/>
        ))
    )
}

export default Library