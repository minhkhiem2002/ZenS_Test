import './Content.scss'
import React from 'react'
import { useState, useEffect } from 'react'
const Content = () => {
    const data = "Three friends embarked on a camping trip but forgot a can opener. Two went to buy one, leaving the third to guard the camp. Upon their return, they found their friends trapped in a bear trap after encountering a bear while attempting to open cans with pull tabs. With quick thinking and teamwork, they managed to free their friends and retreat to safety, their camping escapade forever etched in their memories as a tale of unexpected challenges and camaraderie amidst nature's wild embrace."
    return (
        <div className = "content">
            <p className = "story">{data}</p>
            <hr className='hr' size = "1px"/>
            <div className = "button">
                <button className = "fun-button">This is Funny!</button>
                <button className = "no-button">This is not funny.</button>
            </div>
        </div>
    )
}
export default Content