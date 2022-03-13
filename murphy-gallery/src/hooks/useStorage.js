import { useState, useEffect } from "react"
import { projectStorage } from "../firebase/config"

//hook is a way to create a small base of reusable code and those hooks can be used in whatever components need them, hook is just a function that will be responsible for handling the file uploads and returning some useful values about the uploads e.g progress and errors. 

//file from uploadform state

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTranferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

    export default useStorage