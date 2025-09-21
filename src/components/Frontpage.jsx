import React from 'react';
import Header from './Header';
import Frontpageinformation from './Frontpageinformation';

function Frontpage() {
    return (
        <>
            <div className='pb-7'>
                {/* this is the header of this potfolio*/}
                <div>
                    <Header />
                </div>
                {/* this is the main from page information with developer information */}
                <div className='mt-1.5'>
                    <Frontpageinformation />
                </div>
            </div>


        </>
    );
}

export default Frontpage;