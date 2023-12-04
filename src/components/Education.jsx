import React from 'react'

function Education() {
  return (


    <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4'>My Education</h1>
      <table class="table table-danger table-striped table-hover table-bordered">
         <thead>
          <tr className='table-dark'>
           <th scope="col" className='text-center text-danger'>Sr No</th>
           <th scope="col" className='text-center text-danger'>Qualification</th>
            <th scope="col" className='text-center text-danger'>College</th>
             <th scope="col" className='text-center text-danger'>Passout Year</th>
           </tr>
        </thead>
     <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SSC</td>
      <td>New English School</td>
      <td>2018</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>HSC</td>
      <td>Dada Patil Mahavidyalaya</td>
      <td>2020</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>BCA</td>
      <td>Dada Patil Mahavidyalaya</td>
      <td>2023</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}


// function Education() {
//   return (
//     <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
//       <h1 className='mb-4'>My Education</h1>
//       <table class="table table-danger table-striped table-hover table-bordered">
//         <thead>
//           <tr className='table-dark'>
//             <th scope="col" className='text-center text-danger'>Sr No</th>
//             <th scope="col" className='text-center text-danger'>Qualification</th>
//             <th scope="col" className='text-center text-danger'>College</th>
//             <th scope="col" className='text-center text-danger'>Passout Year</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>SSC</td>
//             <td>Abc College, Pune</td>
//             <td>2012</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>HSC</td>
//             <td>Xyz Mumbai</td>
//             <td>2014</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>BCA</td>
//             <td>Pqr College, Bangalore</td>
//             <td>2017</td>
//           </tr>
//           <tr>
//             <th scope="row">4</th>
//             <td>MCA</td>
//             <td>Pqr College, Bangalore</td>
//             <td>2020</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )


export default Education
