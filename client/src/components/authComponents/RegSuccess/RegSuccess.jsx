import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetPage } from '../../../redux/regPageSlice'
import Countdown from '../../CountDown/CountDown'

const RegSuccess = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(resetPage())
      window.location.reload()
    },5000)

  },[])

  return (
    <div style={{display:'flex', gap:"100px"}}>Redirect in <Countdown countStartValue={5} /></div>

  )
}

export default RegSuccess