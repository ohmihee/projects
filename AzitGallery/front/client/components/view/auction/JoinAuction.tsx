import React, { useState, useEffect } from "react";
import Styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import Router from "next/router"
import { ModalWrapper, OrderTitle, OrderContent, OrderForm, OrderBtn } from "../sell/Order";
// import useInput from "../../../hooks/useInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";


const JoinAcution = (props) => {
    const item_img_link = useSelector((state: RootState) => state.view.item_img_link)
    const [checked, setChecked] = useState<boolean>(false);                 // 동의확인 
    const checkAgreement = (checkedState) => {
        setChecked(checkedState)
    }
    const unCheckedClick = () => {
        alert('동의란을 확인해주세요')
    }

    const { 
        maxPrice, 
        yourBalance, 
        priceChange, 
        setAuctionPrice, 
        setBalance, 
        setBalanceCheck, 
        lowBalance 
    } = props.auctionValue


    return (
        <>
            <ModalWrapper flag={props.openAuction}>
                <AuctionForm flag={props.openAuction}>
                    <OrderTitle>
                        <span>Auction Detail</span>
                        <span onClick={props.auctionOpen}> <CloseIcon /> </span>
                    </OrderTitle>
                    <OrderContent>
                        <div className="orderContentTitle">
                            <div>Item</div>
                            <div>Subtotal</div>
                        </div>
                        <div className="orderContentImage">
                            <div>
                                <img src={item_img_link[0]} />
                            </div>
                        </div>
                        <div className="orderTotalPrice">
                            <div>현재 최고가</div>
                            <div>{props.bid_price} <span className="klay">KLAY</span></div>
                        </div>
                        {/* <div className="yourBalance">
                            <div>잔액</div>
                            <div>{yourBalance} KLAY</div>
                        </div> */}
                        <div className="joinAuction">
                            <div>입찰가</div>
                            <div>
                                <input type="text" onChange={priceChange} /> KLAY
                            </div>
                        </div>
                        <div className="orderAgreement">
                            <input type="checkbox" id="agreementBuy" onChange={e => { checkAgreement(e.target.checked) }} />
                            <label htmlFor="agreementBuy">
                                By checking this box, I agree to 회사명's <span>Tearms of Service</span>
                            </label>
                        </div>
                    </OrderContent>

                    <OrderBtn>
                        {
                            checked
                                ? <button onClick={lowBalance}>Checkout</button>
                                : <button className="unChecked" onClick={unCheckedClick}>Checkout</button>
                        }
                    </OrderBtn>
                </AuctionForm>


            </ModalWrapper>

        </>
    )
}

export default JoinAcution


const AuctionForm = Styled.div<{flag:boolean}>`   
    width : 700px;
    height: 650px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:  ${props => (props.flag ? 'block' : 'none')};
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    position: relative;
    background-color: #fff;
    border-radius: 10px;

    .yourBalance{
        display : flex;
        /* border-bottom: 1px solid rgba(20,30,40,0.1); */
        padding: 2% 0;
        box-sizing: border-box;
    }

    .yourBalance > div:nth-child(1){
        width : 50%;
        font-size: 20px;
        font-weight: bold;
    }
    .yourBalance > div:nth-child(2){
        width: 50%;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
    }
    .joinAuction{
        width: 100%;
        height: auto;
        display: flex;
        border-bottom: 1px solid rgba(20,30,40,0.1);
        padding: 2% 0;
        box-sizing: border-box;
    }
    .joinAuction > div{
        width: 50%;
        font-size: 20px;
        font-weight: bold;
        color: #c43204;
    }
    .joinAuction > div:nth-child(2){
        text-align: right;
    }
    .joinAuction > div:nth-child(2) > input{
        width: 80px;
        height: 30px;
        font-size: 20px;
        text-align: right;
    }

    .joinAuction > div:nth-child(2) > input:focus{
        outline : none;
    }
`