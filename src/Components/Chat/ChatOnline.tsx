import React from 'react'
import styled from 'styled-components'
import { unsplashIMG } from '../../utils/showImage'

const MyChatOnlineDiv = styled.div`

    .chatOnlineFriend{
        display: flex;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
        margin-top: 10px;
    }

    .chatOnlineImgContainer{
        position: relative;
    }

    .chatOnlineImg{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid white;
        margin-right: 10px;
    }

    .chatOnlineBadge{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: limegreen;
        position: absolute;
        top: 2px;
        right: 2px;
    }


`

function MyChatOnline() {
    return (
        <MyChatOnlineDiv>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className='chatOnlineImg'
                        src={unsplashIMG()[0]?.urls?.small}
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Brian Lu</span>
            </div>

        </MyChatOnlineDiv>
    )
}

export default MyChatOnline
