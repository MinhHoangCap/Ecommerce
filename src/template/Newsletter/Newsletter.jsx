import React from 'react'
import "./Newsletter.css"
export default function Newsletter() {
  return (
    <div>
         <div className="Newsletter">
            <div className="Newsletter__image">
                <img src="../../public/newsletter.png" alt="" />
            </div>
            <div className="Newsletter__content">
                <div className="Newsletter__header">
                    <div className="Newsletter__heading">Join Our Newsletter</div>
                    <div className="Newsletter__caption">Sign up for deals, new products and promotions</div>
                </div>
                <div className="Newsletter__form_input">
                    <div className="input">
                        <div className="input_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.07667 6.53075C4.23291 6.01858 4.70918 5.646 5.27246 5.646H19.2725C19.8358 5.646 20.312 6.01858 20.4683 6.53075L12.2725 11.9946L4.07667 6.53075ZM2.5225 6.88226C2.52236 6.89026 2.52235 6.89826 2.52246 6.90625V16.896C2.52246 18.4148 3.75368 19.646 5.27246 19.646H19.2725C20.7912 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9628 18.146 19.2725 18.146H5.27246C4.58211 18.146 4.02246 17.5864 4.02246 16.896V8.29738L11.8564 13.52C12.1084 13.688 12.4366 13.688 12.6885 13.52L20.5225 8.29738ZM22.0224 6.88229C22.015 5.36981 20.7867 4.146 19.2725 4.146H5.27246C3.75826 4.146 2.52989 5.3698 2.5225 6.88226" fill="#141718"/>
                            </svg>
                        </div>
                        <input type="email" name="email" placeholder='Email' id="" />
                    </div>
                    <button type="submit">Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
