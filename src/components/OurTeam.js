import React from 'react'
import '../styles/OurTeam.css'

const teamMembersRow1 = [
    {
        imgUrl: 'noya.png',
        name: 'Noya Reuven',
        position: 'Captain'
    },
    {
        imgUrl: 'tamar.png',
        name: 'Tamar Dayan',
        position: 'Captain'
    },
    {
        imgUrl: 'noga.png',
        name: 'Noga Cohen',
        position: 'Mechanical sub-team lead'
    },
    {
        imgUrl: 'ben.png',
        name: 'Ben Lerner',
        position: 'CAD sub-team lead'
    },
    {
        imgUrl: 'avisar.png',
        name: 'Amit Avisar',
        position: 'Manufacturing sub-team lead'
    }
]

const teamMembersRow2 = [
    {
        imgUrl: 'gal.png',
        name: 'Gal Dotan',
        position: 'Control sub-team lead'
    },

    {
        imgUrl: 'asaf.png',
        name: 'Asaf Meizner',
        position: 'Programing Lead & Media sub-team lead'
    },

    {
        imgUrl: 'amitai.png',
        name: 'Amitai Hefeitz',
        position: 'Electrical lead'
    },

    {
        imgUrl: 'elya.png',
        name: 'Elya Mondelblat',
        position: 'Community sub-team lead'
    }
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h1>Meet Our Team</h1>
                </div>
                <div className='team__wrapper' style={{marginLeft: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {
                        teamMembersRow1.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img 
                                        src={"/team/normal/" + item.imgUrl} 
                                        onMouseOut={e => e.currentTarget.src="/team/normal/" +  item.imgUrl} 
                                        onMouseOver={e => e.currentTarget.src="/team/funny/" +  item.imgUrl} 
                                        alt='' 
                                    />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='team__wrapper' style={{marginLeft: "20px", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {
                        teamMembersRow2.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img 
                                        src={"/team/normal/" + item.imgUrl} 
                                        onMouseOut={e => e.currentTarget.src="/team/normal/" +  item.imgUrl} 
                                        onMouseOver={e => e.currentTarget.src="/team/funny/" +  item.imgUrl} 
                                        alt='' 
                                    />
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
