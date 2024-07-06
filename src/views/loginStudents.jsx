import { TEInput, TERipple } from "tw-elements-react";
import logo from '../imagen/Sera.png';

export function LoginStudents() {
    return <>
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container p-10 max-w-md">
        <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  {/* Logo */}
                  <div className="text-center">
                    <img className="mx-auto w-48" src={logo} alt="Logo del Colegio" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">Bienvenido</h4>
                  </div>

                  <form >
                    <p className="mb-4">Por favor, introduzca su cédula</p>
                    {/* Campo de cédula */}
                    <TEInput
                      name="CI"
                      type="text"
                      label="Cédula"
                      className="mb-4"
                    />

                    {/* Botón de envío */}
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <TERipple rippleColor="light" className="w-full">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out"
                          type="submit"
                          style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                        >
                          Ingresar
                        </button>
                      </TERipple>
                    </div>

                    {/* Enlace de contraseña olvidada */}
                    <a href="#!">¿Olvidaste tu contraseña?</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}