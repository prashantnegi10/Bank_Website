import React from 'react'
import './index.css'
import './App.css'
import { Billing, CardDeal, Clients, CTA, Footer, Header, Navbar, Stats, Testimonials, Buisness } from './components'

const App = () => {
    return (
        <div className='bg-primary'>
            <Navbar />
            <Header />
            <Stats />
            <Buisness />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
        </div>
    )
}

export default App