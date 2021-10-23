import React from 'react';



const School=(props)=>{
    return(
                <div className="card text-center">
                    <div className="overflow">
                        <img className="card-img-top" src="jnv (3).jpg" alt="Imge1"/>
                    </div>
                    <div>
                        <h4>SCHOOL</h4>
                        <div>
                            <table className="table table-border">
                                <tr>
                                    <th>S.n</th>
                                    <th>School Name</th>
                                    <th>Percentage</th>
                                    
                                </tr>
                                <tr>
                                    <td>10th</td>
                                    <td>Jawahar Navodaya Vidyalaya,Ayodhya</td>
                                    <td>89%</td>
                                    
                                </tr>
                                <tr>
                                    <td>12th</td>
                                    <td>Jawahar Navodaya Vidyalaya,Ayodhya</td>
                                    <td>78%</td>
                                </tr>
                                
                            </table>
                        </div>
                        
                        {/* <p>hhhdhhd djhdhd udhd jdjjhd jkjd</p>
                        <a className="btn btn-outline-success" href="https://shopping-app-2021.netlify.app/">Click Me</a> */}
                    </div>
                </div>
    );
};
export default School;