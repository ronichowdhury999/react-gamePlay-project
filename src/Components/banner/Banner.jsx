
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://radiustheme.com/demo/wordpress/themes/gamxo/wp-content/uploads/2022/05/13-700x600.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="max-w-md">
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h1 className="mb-5 text-red-500 text-5xl font-bold">Best Ga<span className="text-white">m</span>es</h1>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">

                            <p className="mb-5 text-2xl font-serif">Ya está The Crew Motorfest con una prueba gratuita
                            </p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">

                            <p>Mientras unos esperan con ansias el próximo Forza Motorsport, otros prefieren una propuesta más desenfadada y directa que pueda suplir al veterano Forza Horizon 5. No podemos negar que cuando sale un nuevo juego de conducción en mundo abierto, nos apetece jugarlo solo por probar cosas nuevas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;