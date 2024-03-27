import React from 'react'
import '../styles/team.css'


const teamMembersRow1 = [
    {
        imgUrl: '/team/image1.png',
        name: 'IDK 1',
        position: 'Production Designer'
    },

    {
        imgUrl: '/team/image2.png',
        name: 'IDK 2',
        position: 'Product Designer'
    },

    {
        imgUrl: '/team/image3.png',
        name: 'IDK 3',
        position: 'Customer Service'
    },

    {
        imgUrl: '/team/image1.png',
        name: 'IDK 4',
        position: 'Project Leader'
    }
]

const teamMembersRow2 = [
    {
        imgUrl: '/team/image1.png',
        name: 'IDK 5',
        position: 'Production Designer'
    },

    {
        imgUrl: '/team/image2.png',
        name: 'IDK 6',
        position: 'Product Designer'
    },

    {
        imgUrl: '/team/image3.png',
        name: 'IDK 7',
        position: 'Customer Service'
    },

    {
        imgUrl: '/team/image1.png',
        name: 'IDK 8',
        position: 'Project Leader'
    }
    
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h1>Meet Our Team</h1>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembersRow1.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembersRow2.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team