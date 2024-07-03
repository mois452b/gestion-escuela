
export function ForgetPassword() {
    return (
        <div className = "flex w-full h-screen bg-gray-200">

        <div className="w-full flex items-center justify-center lg:w-full ">
            <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
                <h1 className=" text-5xl font-semibold">Olvide mi contraseña</h1>
                <p className="font-medium text-lg text-gray-500 mt-4">Introduzca sus datos</p>
                <div className="mt-8">
                    <div>
                        <label className="text-lg font-medium"></label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none"
                            placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-medium"></label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none"
                            placeholder="Ingresa su nueva contraseña"
                            type="password"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-medium"></label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none"
                            placeholder="Confirme su contraseña"
                            type="password"
                        />
                    </div>
                    <div className="mt-8 flex-col gap-y-4">
                        <button className="active:scale-[.98] active:durantion-75 hover:scale-[1.01] eas-in-out transition-all py-3 rounded-xl w-full bg-violet-500 text-white text-lg font-bold ">Confirmar</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}