import { useEffect } from "react";

const useScripts = (url, id) => {
    useEffect(()=>{
        const script = document.createElement('script')
        const block = document.getElementById(id)
        script.src = url
        script.async = true
        block.appendChild(script)
        return () => {
            block.removeChild(script)
        }
    }, [url])
}
export default useScripts