import { useEffect, useState, useRef, React } from "react"

export default function useNearScreen( {distance = '100px', 
externalRef, once = true } ) {
    const fromRef = useRef()
    const [isNearScreen, setIsNearScreen] = useState(false)
    
    useEffect(function(){
        let observer
        
        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setIsNearScreen(true)
                once && observer.disconnect() //only disconnect after the first time, so it doesnt get trigger all the time
            } else {
                !once && setIsNearScreen(false)
            }
        }
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
              ? IntersectionObserver
              : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
              rootMargin: distance
            })
        
            if (element) observer.observe(element)
        })
        
        return () => observer && observer.disconnect() //if observer then disconnect
    })
    return {isNearScreen, fromRef}
}