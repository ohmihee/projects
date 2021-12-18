import Styled from 'styled-components'
import ModalBackground from '../common/ModalBackground'


const Modal = ({children}) => {
    return(
            <CancelNftWrapper>
                {children}
                {/* <div>NFT 발행을 취소할까요?</div>
                <div>입력한 정보는 따로 저장되지 않습니다.</div>
                <div>
                    <span>아니요</span>
                    <span>예</span>
                </div> */}
            </CancelNftWrapper>
    )
}

export default Modal

const CancelNftWrapper = Styled.div`
    background-color:white;
    width:400px;
    height:220px;
    padding:40px;
    line-height:28px;
    border:1px solid black;
    box-shadow:0 4px 10px rgb(0 0 0 / 20%);
    box-sizing:border-box;
    border-radius:0.25rem;
    margin-top:220px;
    div{
        width:318px;
        height:34px;
        text-align:center;
    }
    div:nth-child(1){
        font-size:20px;
        font-weight:700;
        color:#2d3741;   
    }
    div:nth-child(2){
        font-size:14px;
        color: rgba(45,55,65,.7);
        margin-bottom: 32px;   
        font-weight:520;
    }
    div:nth-child(3)>span{
        width:110px;
        height:37px;
        padding:8px;
        vertical-align:middle;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.75;
        border-radius: .25rem;  
        box-sizing: border-box;
    }
    div:nth-child(3)>span:nth-child(1){
        background-color: #9597981f;
        color: #2d3741;
        margin-right:5px;
    }
    div:nth-child(3)>span:nth-child(2){
        color: #fff;
        background-color: #2d3741;
        border-color: #2d3741;
    }
`
// 아니요 예버튼 사이즈가 조정되지 않음....
// additemcomponent에 넣어야 함...



