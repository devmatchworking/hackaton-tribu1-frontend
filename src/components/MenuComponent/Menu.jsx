import "./Menu.css";

export function Menu() {
  return (
    <div className="stepsContainer w-[600px] h-[1420px]">
      <section className="steps">
        <img
          src="https://match-working.com/wp-content/uploads/2023/10/cropped-MATCHWORKING-06.png"
          alt=""
          className="w-48 h-48 items-center justify-center mx-auto mt-1 bg-white rounded-md mb-5  "
        />

        <span className="information text-[1.5rem] mb-10">
          Bienvenido a nuestro sistema de carta de motivación. Sigue los pasos a
          continuación para completar tu solicitud.
        </span>

        <div className="selection">
          <span className="number">1</span>
          <div className="info">
            <h2 className="step">Paso 1</h2>
            <span className="information">
              Llena todos los campos con tus datos personales y empresariales
              correctamente.
            </span>
          </div>
        </div>

        <div className="selection">
          <span className="number">2</span>
          <div className="info">
            <h2 className="step">Paso 2</h2>
            <span className="information">Da clic en el botón enviar.</span>
          </div>
        </div>

        <div className="selection">
          <span className="number">3</span>
          <div className="info">
            <h2 className="step">Paso 3</h2>
            <span className="information">
              Descarga la información en un documento y edita lo a tu gusto.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
