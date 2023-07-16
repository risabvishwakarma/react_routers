import React from "react";
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';

function Medicin() {

    const jsonReport = JSON.parse(Report)

    return (


        <div className="container">
            <div className="row">
                <div className="d-flex flex-row mt-3">
                    <div className="col-5 col-md-5 col-lg-5">
                        <p className="par">MEDICATIONS</p>
                        <div className="d-flex flex-row">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-capsule" viewBox="0 0 16 16">
                                    <path
                                        d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
                                </svg>
                            </div>
                            <h2 className="par-1">Active Medications (3)</h2>
                        </div>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <p className="par-2">PATIENT NAME</p>
                        <p className="par-3">{jsonReport.Patient.name}</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <p className="par-2">DATE OF BIRTH</p>
                        <p className="par-3">{jsonReport.Patient.DOB}</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <p className="par-2">DATE OF ISSUE</p>
                        <p className="par-3">{jsonReport.Patient.DOE}</p>
                    </div>
                </div>

            </div>

            <hr />
            <hr />
            {jsonReport.Patient.objects.map((object, index) => (
            <div>
                <div className="row">
                    <div className="d-flex flex-row mt-3">
                        <div className="col-5 col-md-5 col-lg-5">
                            <p className="par-3">{object.medicine.name + " " + object.medicine.quantity + " " + object.medicine.type}</p>


                            {object.medicine.type!=="INJ"?
                            <div className="d-flex flex-row">
                                <div>
                                    <p className="parag">SIDE A </p>

                                    <div className="row">
                                        {object.medicine.type==="CAPSULE"?
                                        <div >{capsule}</div> : <div className="elipse">600</div>}
                                    </div>
                                  </div>
                                    <div>
                                    <p className="parag">SIDE B </p>
                                    <div className="row">
                                        {object.medicine.type==="CAPSULE"?
                                        <div >{capsule}</div> : <div className="elipse">600</div>}
                                    </div>

                                </div>

                            </div>
                            :
                            <div className="d-flex flex-row">
                                <div>
                                    <p className="parag">APPEARANCE</p>
                                    <div className="row">
                                        <div><svg fill="#000000" height="94px" width="94px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 183.15 183.15" xmlSpace="preserve" stroke="#000000" strokeWidth="0.00183153" transform="rotate(45)matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M182.274,0.879c-1.171-1.172-3.071-1.172-4.242,0L145.331,33.58c-1.5-0.209-3.074,0.245-4.227,1.398l-9.146,9.146 l-11.538-11.537c-1.953-1.952-5.118-1.952-7.071,0l-76.01,76.01l-1.521-1.521c-1.953-1.952-5.118-1.952-7.071,0 c-1.953,1.953-1.953,5.119,0,7.071l5.057,5.057l11.538,11.538l-27.828,27.827l-8.978-8.978c-1.953-1.952-5.118-1.952-7.071,0 c-1.953,1.953-1.953,5.119,0,7.071l25.027,25.027c0.977,0.976,2.256,1.464,3.536,1.464c1.279,0,2.559-0.488,3.536-1.464 c1.953-1.953,1.953-5.119,0-7.071l-8.978-8.978l27.828-27.827L63.95,149.35l5.057,5.057c0.977,0.976,2.256,1.464,3.536,1.464 s2.559-0.488,3.536-1.464c1.953-1.953,1.953-5.119,0-7.071l-1.521-1.521l76.01-76.01c0.938-0.938,1.464-2.209,1.464-3.536 s-0.527-2.598-1.464-3.536L139.03,51.195l9.146-9.146c1.153-1.153,1.607-2.728,1.398-4.227l32.7-32.7 C183.446,3.95,183.446,2.05,182.274,0.879z M67.486,138.743L44.41,115.667l14.417-14.417l11.538,11.538 c0.585,0.586,1.354,0.879,2.121,0.879s1.536-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L63.07,97.008l7.128-7.128 l11.538,11.538c0.585,0.585,1.354,0.878,2.121,0.878s1.536-0.293,2.122-0.879c1.171-1.171,1.171-3.071,0-4.243L74.441,85.637 l7.128-7.128l11.538,11.538c0.585,0.586,1.354,0.879,2.121,0.879s1.536-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242 L85.812,74.266l7.128-7.128l11.537,11.538c0.586,0.586,1.354,0.879,2.122,0.879c0.768,0,1.536-0.293,2.121-0.878 c1.172-1.172,1.172-3.071,0-4.243L97.183,62.895l19.702-19.702l23.075,23.075L67.486,138.743z"></path> </g> </g></svg></div>
                                    </div>
                                </div>
                            </div>
                            }





                            <hr className="bor-1"/>
                            <p className="par-3">REASON FOR MEDICATION</p>
                            <p className="par-3">{object.medicine.Reasone}</p>
                        </div>

                        <div className="vertical-line"></div>

                        <div className="col-5 col-md-5 col-lg-5">
                            <p className="par-4">DIRECTIONS / NOTES</p>
                            <p className="par-4">{object.direction.text}
                            </p>
                            <p className="par-2">{object.direction.subtext}
                            </p>
                            <br/>
                            <br/>
                            <div className="d-flex flex-row">
                                <div className="col-2 col-lg-2">
                                    <img
                                        src="https://res.cloudinary.com/dv68iuk8w/image/upload/v1689415223/n7_qskleo.png"
                                        className="image-1"></img>

                                </div>
                                <div className="col-8">
                                    <button className="bor " >
                                        <div className="d-flex flex-row">

                                            {object.direction.times.map((item, index) => (
                                            <div className="col-3">
                                                <p className="bot-par">{item}</p>
                                            </div>
                                            ))}


                                        </div>
                                    </button>
                                </div>
                                <div className="col-2 col-lg-2">
                                    <img
                                        src="https://res.cloudinary.com/dv68iuk8w/image/upload/v1689415055/n6_q0w1ve.png"
                                        className="image-1"></img>


                                </div>
                            </div>
                        </div>
                        <div className="vertical-line"></div>
                        <div
                            className="col-5 col-md-5 col-lg-5">
                            <p className="par-3">POSSIBLE SIDE EFFECT</p>

                            {object.side_effects.map((item, index) => (

                                <div className="d-flex flex-row">
                                    <img
                                        src="https://res.cloudinary.com/dv68iuk8w/image/upload/v1689413636/n4_ntomwg.png"
                                        className="image-1"/>
                                    <h5 className="pl-3">{item}</h5>
                                </div>))}


                            <br/>
                            {object.Help.trim().length > 0 &&
                                <div className="d-flex flex-column">
                                    <p className="par-3">GET MEDICAL HELP IF</p>
                                    <p className="par-3">{object.Help}</p>
                                </div>
                            }


                        </div>

                    </div>

                </div>

                <hr className="bor"/>
            </div>
            ))}

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <div class="d-flex flex-row">
                <p >MEDICATION </p>
                <p >Active Medication</p>
            </div>
        </div>

    );
}

const Report = `
{
  "Patient": {
    "name": "John Doe",
    "DOB": "1990-05-15",
    "DOE": "2023-07-12",
    "no_of_desices":2,
    "objects": [
      {
        "medicine": {
          "type": "TAB",
          "name": "Paracetamol",
          "quantity": "500 mg",
          "image": {
            "sideA": "image_url_sideA",
            "sideB": "image_url_sideB"
          },
          "Reasone": "Fever"
        },
        "direction": {
          "time_type": "number",
          "no_of_tab": "1",
          "times": ["8:00 AM", "12:00 PM", "4:00 PM", "8:00 PM"],
          "by": "Oral",
          "text": "1 table by mouth 4 times a day with  food every 4 hours",
          "subtext": ""
        },
        "side_effects": ["Nausea", "Headache"],
        "Help": "Experiencing chest pain,shortness of breadth,and weight gain."
      },
      
      
      {
        "medicine": {
          "type": "CAPSULE",
          "name": "Paracetamol2",
          "quantity": "600 mg",
          "image": {
            "sideA": "image_url_sideA",
            "sideB": "image_url_sideB"
          },
          "Reasone": "For treatement of symptoms of an enlarged prostate"
        },
        "direction": {
        
          "no_of_tab": "3",
         "times": ["","","","Bedtime"],
          "by": "Oral",
          "text": "1 injection at bedtime",
          "subtext": "inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not massage the injection site"
        },
        "side_effects": ["Dizziness", "Headache","Constipation","Loss of appetite","Fatigue"],
        "Help": "    "
      },
      
      {
        "medicine": {
          "type": "INJ",
          "name": "Paracetamol",
          "quantity": "500 UNT/ML",
          "image": {
            "sideA": "image_url_sideA",
            "sideB": "image_url_sideB"
          },
          "Reasone": "Reduce Blood pressure"
        },
        "direction": {
         
          "times": ["","","","Bedtime"],
          "by": "Oral",
          "text": "3 Capsule before bed",
          "subtext": ""
        },
        "side_effects": ["Nausea", "Headache","Fever"],
      
        "Help": "Experience itaching skin,wheezing,and fast heart rate."
      }
    ]
  }
}
`
const capsule= <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4688 18.4759C9.10334 19.8414 6.88952 19.8414 5.52408 18.4759C4.15864 17.1105 4.15864 14.8967 5.52408 13.5312L8.99734 10.058L13.942 15.0027L10.4688 18.4759ZM15.0027 13.942L18.4759 10.4688C19.8414 9.10334 19.8414 6.88952 18.4759 5.52408C17.1105 4.15864 14.8967 4.15864 13.5312 5.52408L10.058 8.99731L15.0027 13.942ZM4.46342 19.5366C6.41465 21.4878 9.57821 21.4878 11.5294 19.5366L19.5366 11.5294C21.4878 9.57821 21.4878 6.41465 19.5366 4.46342C17.5854 2.51219 14.4218 2.51219 12.4706 4.46342L4.46342 12.4706C2.51219 14.4218 2.51219 17.5854 4.46342 19.5366Z" fill="#080341"></path> </g></svg>

export default Medicin;