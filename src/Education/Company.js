import React from 'react';



const Company=(props)=>{
    return(
                <div className="card text-center">
                    <div className="overflow">
                        <img className="card-img-top" src="asoftware.webp" alt="Imge1"/>
                    </div>
                    <div>
                        <h4>PROFSSIONAL QUALIFICATION</h4>
                        <p>The Future depends on what you do Today </p>
                        <div>
                            <table className="table table-border">
                                <tr>
                                    <th>S.n</th>
                                    <th>Company Name</th>
                                    <th>Experience</th>
                                    
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Persistent System,Bangalore</td>
                                    <td>Current</td>
                                    
                                </tr>
                                
                                
                            </table>
                        </div>
                        <a className="btn btn-outline-success" href="https://www.persistent.com/">Click Me</a>
                    </div>
                </div>
    );
};
export default Company;