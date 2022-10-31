import back from '../assets/back.svg'

// let fundTime = weather.weather?.[0].icon
// let linkFund = ''

// switch (fundTime) {
//   case '01d':
//     linkFund =
//       'https://images.pexels.com/photos/4671463/pexels-photo-4671463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '01n':
//     linkFund =
//       'https://images.pexels.com/photos/13891178/pexels-photo-13891178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '02d':
//     linkFund =
//       'https://images.pexels.com/photos/5069533/pexels-photo-5069533.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '02n':
//     linkFund =
//       'https://images.pexels.com/photos/13511276/pexels-photo-13511276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '03d':
//     linkFund =
//       'https://images.pexels.com/photos/12262726/pexels-photo-12262726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '03n':
//     linkFund =
//       'https://images.pexels.com/photos/12903460/pexels-photo-12903460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '04d':
//     linkFund =
//       'https://images.pexels.com/photos/11513041/pexels-photo-11513041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '04n':
//     linkFund =
//       'https://images.pexels.com/photos/12907149/pexels-photo-12907149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '09d':
//     linkFund =
//       'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '09n':
//     linkFund =
//       'https://images.pexels.com/photos/2618980/pexels-photo-2618980.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '10d':
//     linkFund =
//       'https://images.pexels.com/photos/1755702/pexels-photo-1755702.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '10n':
//     linkFund =
//       'https://images.pexels.com/photos/11408850/pexels-photo-11408850.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '11d':
//     linkFund =
//       'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '11n':
//     linkFund =
//       'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '13d':
//     linkFund =
//       'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '13n':
//     linkFund =
//       'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800'
//     break
//   case '50d':
//     linkFund =
//       'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
//   case '50n':
//     linkFund =
//       'https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     break
// }

// document.body.style = `background-image: url(${linkFund});  background-size: cover`

import React from 'react'

function Background({ weather }) {
  // let fundTime = weather.weather?.[0].icon

  return (
    <div className='back'>
      <img src={back} alt='' />
    </div>
  )
}

export default Background
