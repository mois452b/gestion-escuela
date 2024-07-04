import { TEInput, TERipple } from "tw-elements-react";
import logo from '../imagen/Sera.png';
export function ForgetPassword() {
    return (
      <section className="h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <div className="container mx-auto p-10">
          <div className="max-w-md mx-auto bg-white shadow-lg dark:bg-neutral-800 rounded-lg">
            <div className="p-6 md:p-12">
              {/* Logo */}
              <div className="text-center">
                <img className="mx-auto w-48" src={logo} alt="Logo del Colegio" />
                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-neutral-800 dark:text-neutral-200">Cambiar contraseña</h4>
              </div>
  
              <form>

                {/* Campo de correo electrónico */}
                <TEInput type="email" label="Correo electrónico" className="mb-4" />

                {/* Campo de usuario */}
                <TEInput type="text" label="Usuario" className="mb-4" />
                      
                {/* Campo de contraseña */}
                <TEInput type="password" label="Contraseña" className="mb-4" />
                      
                {/* Campo de confirmar contraseña */}
                <TEInput type="password" label="Confirmar Contraseña" className="mb-4" />
  
                {/* Botón de envío */}
                <div className="mb-12 pb-1 pt-1 text-center">
                  <TERipple rippleColor="light" className="w-full">
                    <button
                      className="mb-3 inline-block w-full  rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out"
                      type="button"
                      style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                    >
                      Enviar 
                    </button>
                  </TERipple>
                </div>
  
                {/* Enlace de regreso a inicio de sesión */}
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2 text-neutral-800 dark:text-neutral-200">¿Recordaste tu contraseña?</p>
                  <TERipple rippleColor="light">
                    {/*<Link to="/login">*/}
                      <button
                        type="button"
                        className="inline-block rounded border-2 text-neutral-800 dark:text-neutral-200 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                      >
                        Iniciar Sesión
                      </button>
                    {/*</Link>*/}
                  </TERipple>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }