import React from 'react'
import '../styles/OurTeam.css'


const teamMembersRow2 = [
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

const teamMembersRow1 = [
    {
        imgUrl: '/team/LiorGil.png',
        name: 'Lior Gil',
        position: 'Captain'
    },

    {
        imgUrl: '/team/NadavBino.png',
        name: 'Nadav Bino',
        position: 'Captain'
    },

    {
        imgUrl: '/team/OriGoldshtein.png',
        name: 'Ori Goldshtein',
        position: 'Electrical sub-team lead & Driver'
    },

    {
        imgUrl: '/team/BenChigiriski.png',
        name: 'Ben Chigiriski',
        position: 'CAD sub-team lead & Coach'
    }
    
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h1>Meet Our Team</h1>
                </div>
                <div className='team__wrapper' style={{marginLeft: "20px", marginRight: "20px"}}>
                    {
                        teamMembersRow1.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='team__wrapper' style={{marginLeft: "20px", marginRight: "20px"}}>
                    {
                        teamMembersRow2.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
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