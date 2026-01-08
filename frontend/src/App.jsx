import Sidebar from "./custom/Sidebar"
import RoleSelection from "./pages/RoleSelection"
import ValidatorDashboard from "./pages/ValidatorDashboard"

function App() {
  return (
    <div className="flex min-h-screen bg-[#fffaf4]">
      {/* <div className="flex min-h-screen bg-[#fffaf4]">if you wanna remove sidebar,uncomment this line */}
      <Sidebar />
      <ValidatorDashboard />
      {/* <RoleSelection /> */}
    </div>
  )
}

export default App
