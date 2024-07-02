export const Register = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="p-2 border bg-gray-300 rounded">
                <form className="flex flex-col gap-4" onSubmit={_=> _.preventDefault()}>
                    <h2 className="text-2xl text-center text-gray-800">Register</h2>
                    <label>
                        username
                        <input />
                    </label>
                    <label>
                        password
                        <input />
                    </label>
                    <label>
                        cnfirm password
                        <input />
                    </label>
                </form>
            </div>
        </div>
    )
}