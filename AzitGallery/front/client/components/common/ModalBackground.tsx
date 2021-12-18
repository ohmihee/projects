import Styled from 'styled-components'
import React,{useEffect} from 'react'


const ModalBackground: any = ({children}) =>{
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          // top: -${window.scrollY}px;
          // overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    return(
        
            <ModalBackgroundWrppaer>
                {/* <div id="logo">AzitGallery</div> */}
                {children}
            </ModalBackgroundWrppaer>
    )
}

export default ModalBackground


const ModalBackgroundWrppaer = Styled.div`
    z-index:4000000000;
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    background-color:rgba(0, 0, 0, 0.6);
    display:flex;
    justify-content: center;
    top:0;
    left:0;
    /* #logo{
        color:white;
        margin-top:150px;
        margin-bottom:30px;
    } */
`
