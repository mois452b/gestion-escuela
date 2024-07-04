
import { TEInput, TERipple } from "tw-elements-react";
import logo from '../imagen/Sera.png';
export function Register() {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Columna izquierda */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img className="mx-auto w-48" src={logo} alt="Logo del Colegio" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">Registro</h4>
                    </div>

                    <form>
                      <p className="mb-4">Por favor, complete sus datos</p>
                      
                      {/* Campo de nombre */}
                      <TEInput type="text" label="Nombre" className="mb-4" />
                      
                      {/* Campo de apellido */}
                      <TEInput type="text" label="Apellido" className="mb-4" />
                      
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
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out"
                            type="button"
                            style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                          >
                            Registrarse
                          </button>
                        </TERipple>
                      </div>

                      {/* Botón de inicio de sesión */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">¿Ya tienes una cuenta?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                          >
                            Iniciar Sesión
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Columna derecha */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Alguna estupidez
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
