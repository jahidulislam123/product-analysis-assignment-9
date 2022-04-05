// import React from 'react';
import './Footer.css'

// const Footer = () => {
//     return (
//         <div>
    //          <footer className="bg-black pt-3 pb-3">
    //     <section className="container text-white">
    //         <div className="d-flex justify-content-between align-items-center">
    //             <div>
    //                 <p>&copy;2022 all right .All bike reseverd Jahidul Islam.</p>

    //             </div>
    //             <div>

    //                 <h3 className="m-0 pb-2">Get the app</h3>
    //                 <a className="text-white" href="https://apps.apple.com/us/app/google/id284815942">
    //                     <div className="border rounded-3 mb-2">
    //                         <div className="d-flex align-items-center">
    //                             <div className="fs-1 pe-2 ps-2">
    //                                 <i className="fab fa-apple w-2.4rem"></i>
    //                             </div>
    //                             <div>
    //                                 <small className="p-0 m-0">Download the app</small>
    //                                 <h4 className="m-0">App Store</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </a>

    //                 <a className="text-white" href="https://play.google.com/store/apps">
    //                     <div className="border rounded-3">
    //                         <div className="d-flex align-items-center">
    //                             <div className="fs-1 pe-2 ps-2">
    //                                 <i className="fas fa-play"></i>
    //                             </div>
    //                             <div>
    //                                 <small className="p-0 m-0">Download the app</small>
    //                                 <h4 className="m-0 ">Play store</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </a>
    //             </div>
    //         </div>


    //     </section>


    // </footer>
    
//         </div>
//     );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
               <footer className="bg-black pt-3 pb-3">
        <section className="container text-white">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p>&copy;2022 all right .All bike reseverd Jahidul Islam.</p>

                </div>
                <div>

                    <h3 className="m-0 pb-2">Get the app</h3>
                    <a className="text-white" href="https://apps.apple.com/us/app/google/id284815942">
                        <div className="border rounded-3 mb-2">
                            <div className="d-flex align-items-center">
                                <div className="fs-1 pe-2 ps-2">
                                    <i className="fab fa-apple w-2.4rem"></i>
                                </div>
                                <div>
                                    <small className="p-0 m-0">Download the app</small>
                                    <h4 className="m-0">App Store</h4>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="text-white" href="https://play.google.com/store/apps">
                        <div className="border rounded-3">
                            <div className="d-flex align-items-center">
                                <div className="fs-1 pe-2 ps-2">
                                    <i className="fas fa-play"></i>
                                </div>
                                <div>
                                    <small className="p-0 m-0">Download the app</small>
                                    <h4 className="m-0 ">Play store</h4>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


        </section>


    </footer>

            
        </div>
    );
};

export default Footer;