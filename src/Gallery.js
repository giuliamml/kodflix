import React from 'react';
import black_mirror from './images/black_mirror.jpg';
import chernobyl from './images/chernobyl.jpg';
import mindhunter from './images/mindhunter.jpg';
import sopranos from './images/sopranos.jpg';
import the_sinner from './images/thesinner.jpg';
import wild_wild_country from './images/wildwildcountry.jpg';
import Series from './Series';


export default function Gallery() {
    return (
        <div>
            <div className='container'>
                <Series name='Black Mirror' image={black_mirror} id='black_mirror' />
                <Series name='Chernobyl' image={chernobyl} id='chernobyl' />
                <Series name='Mind Hunter' image={mindhunter} id='mind_hunter' />
            </div>
            <div className='container'>
                <Series name='Sopranos' image={sopranos} id='sopranos' />
                <Series name='The Sinner' image={the_sinner} id='the_sinner'/>
                <Series name='Wild Wild Country' image={wild_wild_country} id='wild_wild_country' />
            </div>

        </div>

    )

}
