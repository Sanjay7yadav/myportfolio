import React from 'react';
import  ReactDOM  from 'react';


const College=(props)=>{
    return(
                <div className="card text-center">
                    <div className="overflow">
                        <img className="card-img-top" src="college.jpg" alt="Imge1"/>
                    </div>
                    <div>
                        <h4>COLLEGE</h4>
                        <p>An investment in knowledge always pay best interest</p>
                        <div>
                            <table className="table">
                                <tr>
                                    <th>Degree</th>
                                    <th>College Name</th>
                                    <th>CGPA</th>
                                </tr>
                                <tr>
                                    <td>B.E</td>
                                    <td>Sri Eshwar College Of Engineering</td>
                                    <td>8.0</td>
                                </tr>
                            </table>
                        </div>
                         <a className="btn btn-outline-success" href="https://sece.ac.in/">Click Me</a> 
                    </div>
                </div>
    );
};
export default College;