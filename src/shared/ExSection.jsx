import React from 'react';

const ExSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-7 '>
            <div>
                <img src="https://i.ibb.co.com/t4vH4Xw/pexels-andrew-mai-1752775138-29904279.jpg"  />
            </div>
            <div className='p-4 space-y-5'>

                <h1 className='text-3xl font-bold'> 
                The Myth of Barbarian Hordes: Reimagining Ancient Conquerors
                </h1>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co.com/4gD85k2/pexels-moh-adbelghaffar-771742.jpg" className='w-10 h-10 rounded-full' />
                    <h4>Daniel Wood</h4>
                </div>
                <p className='text-xl font-normal'>Uncover the truth behind the mythos of barbarian hordes that once swept across ancient civilizations.
                     This exploration challenges narratives,
                     offering a perspective on the diverse cultures and motivations of these warriors
                     The term “barbarian hordes” conjures images of ruthless invaders descending upon settled lands,
                      leaving destruction in their wake. However, this portrayal often oversimplifies the 
                       of ancient migrations and conflicts.
                     </p>
            </div>
        </div>
    );
};

export default ExSection;