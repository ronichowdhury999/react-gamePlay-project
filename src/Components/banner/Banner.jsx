
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://tiempogamer.com/wp-content/uploads/2023/09/the-crew-motorfest.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-yellow-500 text-5xl font-bold">Best Games</h1>
                        <p className="mb-5 text-2xl font-serif">Ya está The Crew Motorfest con una prueba gratuita
                        </p>
                        <p>Mientras unos esperan con ansias el próximo Forza Motorsport, otros prefieren una propuesta más desenfadada y directa que pueda suplir al veterano Forza Horizon 5. No podemos negar que cuando sale un nuevo juego de conducción en mundo abierto, nos apetece jugarlo solo por probar cosas nuevas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;