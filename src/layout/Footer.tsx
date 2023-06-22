const Footer = () => {
  return (
    <footer>
      <div className="bg-[#090B13] pt-12 pb-4 text-xs content-center">
        <img src="/disney.png" alt="" className="mx-auto mb-8" />
        <ul className="footer__list text-center p-0">
          <li>Política de privacidad</li>
          <li>Acuerdo de suscripción</li>
          <li>Ayuda</li>
          <li>Dispositivos compatible</li>
          <li>Acerca de Disney+</li>
          <li>Publicidad personalizada</li>
        </ul>
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
    </footer>
  );
};

export default Footer;
