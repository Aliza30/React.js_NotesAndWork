import { useEffect, useState } from "react"


const User = (props) => {



    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Address:{props.address}</h3>
            <h3>Contact: {props.contact}</h3>
        </div>
    )
}
export default User




//-----------DESTRUCTURE ON THE FLY---------

// const User = ({ name, address, contact }) => {
//     return (
//         <div className="user-card">
//             <h2>Name: {name}</h2>
//             <h3>Address:{address}</h3>
//             <h3>Contact: {contact}</h3>
//         </div>
//     )
// }
// export default User