import React from 'react'

interface dimensions{
  w:number,
  h:number
}

function X(props:dimensions) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} fill="none" viewBox="0 0 512 512" id="twitter">
        <g clipPath="url(#clip0_84_15698)">
            <rect width="512" height="512" fill="#fff" rx="60"></rect>
            <path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path>
        </g>
        <defs>
            <clipPath id="clip0_84_15698">
            <rect width="512" height="512" fill="#fff"></rect>
            </clipPath>
        </defs>
        </svg>
    </div>
  )
}

export default X