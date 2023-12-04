import React from 'react';
import resume from './DHOBE PRATIKSHA Resume.pdf';

function Home() {
    let whatsapp_message = "https://wa.me/7218968990";

    return (
        <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-item-center'>
            <div>
                <h1>Hello, I am <span className='text-danger display-2 fw-bold'>Pratiksha</span></h1>
                <p className='my-info w-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum quasi voluptates temporibus vel officiis ex voluptate eaque, 
                    consequuntur sed, fugiat quos animi corporis at dolorum nisi, illum ducimus nulla.
                </p>
            </div>
            <div>
                <a href={resume} className='btn btn-outline-danger mx-3' download>Download Resume</a>
                <a href={whatsapp_message} className='btn btn-outline-danger' target='_blank' rel='noopener noreferrer'>WhatsApp</a>
            </div>
        </div>
    );
}

export default Home;
