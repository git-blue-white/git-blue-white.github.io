import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}<br /><br />
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing} (graduated)</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                       <img alt="University Mark" src={`${item.imageurl}`} className="item-img"/>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work1 && resumeData.work1.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}<br /><br />
                          <span>&bull;</span> <em className="date">{item.YearOfLeaving}</em></p>
                          {
                            item.Achievements && item.Achievements.map((item) => {
                              return(
                                <p>- {item.context}</p>
                              )
                            })
                          }
                       </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="nine columns main-col seconddiv"><br />
              {
                resumeData.work2 && resumeData.work2.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}<br /><br />
                          <span>&bull;</span> <em className="date">{item.YearOfLeaving}</em></p>
                          {
                            item.Achievements && item.Achievements.map((item) => {
                              return(
                                <p>- {item.context}</p>
                              )
                            })
                          }
                       </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="nine columns main-col"><br />
              {
                resumeData.work3 && resumeData.work3.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}<br /><br />
                          <span>&bull;</span> <em className="date">{item.YearOfLeaving}</em></p>
                          {
                            item.Achievements && item.Achievements.map((item) => {
                              return(
                                <p>- {item.context}</p>
                              )
                            })
                          }
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>
              <div style={{display:'flex'}} id = "skillrowid">
                <div className="bars">

                  <ul className="skills">
                      {
                        resumeData.skillsforfront && resumeData.skillsforfront.map((item) => {
                          return(
                            <li>
                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                            </span><em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }

                  </ul>

                </div>
                <div className="bars">

                  <ul className="skills">
                      {
                        resumeData.skillsforback && resumeData.skillsforback.map((item) => {
                          return(
                            <li>
                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                            </span><em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }

                  </ul>

                </div>
              </div>

            </div>
          
         </div>

      </section>
    );
  }
}