import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#090B13] w-screen pt-12 pb-4 text-xs content-center">
        <img src="/disney.png" alt="" className="mx-auto mb-8" />
        <div className="flex flex-grow gap-x-5 justify-center mb-9">
          <span>Política de privacidad</span>
          <span>Acuerdo de suscripción</span>
          <span>Ayuda</span>
          <span>Dispositivos compatible</span>
          <span>Acerca de Disney+</span>
          <span>Publicidad personalizada</span>
        </div>
        <div className="w-[456px] text-center mx-auto mb-10">
          <span>
            Disney+ es un servicio por suscripción de pago, su contenido está
            sujeto a disponibilidad. El servicio Disney+ es comercializado por
            Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
          </span>
        </div>
        <div className="w-full text-center mx-auto">
          <span>© Disney. Todos los derechos reservados.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
