
function sign () {
    if (window.__dtsigned) return

    console.log(`%c
             ___              _     _              _____                 _        _ 
            |   \\  __ _ __ __(_) __| | ___        |_   _|_  _  _ _  _ _ (_) _ _  (_)
            | |) |/ _' |\\ V /| |/ _' |/ -_)         | | | || || '_|| '_|| || ' \\ | |
            |___/ \\__,_| \\_/ |_|\\__,_|\\___|         |_|  \\_,_||_|  |_|  |_||_||_||_|     
    
    F  R  E  E  L  A  N  C  E     S  O  F  T  W  A  R  E     D  E  V  E  L  O  P  M  E  N  T  
    `, 'font-size: 12px; font-weight: bold; color: cyan; ')

    console.log(`%c
            ✨✨✨ O P E N   T O   W O R K ✨✨✨
    `, 'font-size: 20px; font-weight: bold; color: lime;')

    console.log(`%c
        
        LinkedIn: https://www.linkedin.com/in/davide-turrini/
        Website: https://www.davide-turrini.it/
        Email: dt.turrini@gmail.com
        

        `, 'font-size: 12px; font-weight: bold; color: cyan;')

    window.__dtsigned = 1

    const server = 'https://t.counter.dev'
    const id = '0745be7c-3410-4b11-9a7a-bb976f65ce05'
    const utcoffset = 1
    
    if(sessionStorage.getItem('doNotTrack')||localStorage.getItem('doNotTrack')){
        return
    }
    
    if(!sessionStorage.getItem("_swa")&&!document.referrer.startsWith(location.protocol+"//"+location.host))
    {
        setTimeout(
            () => {
                sessionStorage.setItem("_swa","1");fetch( server + "/track?"+
                    new URLSearchParams({
                        referrer: document.referrer, 
                        screen: screen.width + "x" + screen.height, 
                        id,
                        utcoffset
                    })
                )
            }, 4500)
    }
    
    navigator.sendBeacon(server + "/trackpage", 
        new URLSearchParams({
            id,
            page:window.location.pathname
        })
    )
}

sign()
