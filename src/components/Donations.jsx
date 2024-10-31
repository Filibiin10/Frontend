import React from 'react'

const Donations = () => {
  return (
    <div>
        Donation
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Donations