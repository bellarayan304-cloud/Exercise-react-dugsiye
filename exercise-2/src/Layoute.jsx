const Footer = () =>{
    return <h1>footer of website</h1>
}
const Header = () =>{
    return <h2>header of website </h2>
}
const WeChooose = () =>{
    return <p>main of website  and</p>
}
const Layoute = () =>{
    return(  
    <div>
        <Header />
            <main>
                 <WeChooose />
            </main>
        <Footer />
    
    </div>
    )
}

export default Layoute;