import "./Menu.css";

export function Menu() {
  return (
    <div className="stepsContainer">
      <section className="steps">
        <div className="selection">
          <span className="number">1</span>
          <div>
            <h2 className="step">Paso 1</h2>
            <span className="information">Información Personal</span>
          </div>
        </div>

        <div className="selection">
          <span className="number">2</span>
          <div>
            <h2 className="step">Paso 2</h2>
            <span className="information">Información sobre la empresa</span>
          </div>
        </div>

        <div className="selection">
          <span className="number">3</span>
          <div>
            <h2 className="step">Paso 3</h2>
            <span className="information">Descargar carta</span>
          </div>
        </div>
      </section>
    </div>
  );
}
