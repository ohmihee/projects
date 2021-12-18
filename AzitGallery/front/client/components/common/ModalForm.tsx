import Styled from 'styled-components'

const ModalForm = ({children},props) => {
    return(
        <>
            <FormWrapper flag={props.flag}>
                {children}
            </FormWrapper>
        </>
    )
}

export default ModalForm 

const FormWrapper = Styled.div`
    z-index:999;
    box-sizing:border-box;
    width:350px;
    height : auto;
    min-height:220px;
    border-radius:3%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    display:${(props)=>(props.flag?"block":'none')};
    display:block;
    justify-content:center;
    text-align:center;
    padding-top:10px;
    position:absolute;
    align-items:center;
    background-color:white;
    margin: auto;
    top:30%;
    border: 1px solid black;
    padding: 30px;
    a{
        text-decoration:none;
        background-color:#2d3741;
        color:white;
    }

    .btnLeft{
          background-color:#9597981f;
          color:black;
    }
    div:nth-child(1) p{
        cursor : default;
        font-weight:900;
        font-size:17.5px;
        padding-bottom:20px;
    }
    div:nth-child(2) p{
        cursor : default;
        font-size:14.5px;
        color:#6c757d;
        margin-bottom:35px;
    }
    div:nth-child(3){
        cursor : pointer;
        margin-top:15px;
        display:flex;
        justify-content:center;
    }
    div:nth-child(3)>span{
        cursor : pointer;
        width:110px;
        height:37px;
        margin-left:2px;
        margin-right:2px;
        border-radius:7%;
        line-height:35px;
        color: #2d3741;        
    }
    div:nth-child(3)>span:nth-child(1){
        background-color:#9597981f;
        color:#2d3741;
        font-weight:500;

    }
    div:nth-child(3)>span:nth-child(2){
        background-color:#2d3741;
        color:white;
        font-weight:500;
        
    }

    
`