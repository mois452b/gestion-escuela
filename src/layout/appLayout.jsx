import { AsideMenu } from "../components/asideMenu"

export const AppLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-200 p-4">
                <AsideMenu />
            </aside>
            <main className="w-3/4 bg-white p-8">
                {children}
            </main>
        </div>
    )
}