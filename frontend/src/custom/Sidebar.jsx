export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#fef3e2] border-r border-[#f3d7b6] flex flex-col justify-between">
      <div className="p-6 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
            $
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-900">ExpenseFlow</h1>
            <p className="text-sm text-gray-500">Enterprise Suite</p>
          </div>
        </div>

        <div className="h-20 rounded-xl bg-[#fff7ed]" />

        <div className="h-20 rounded-xl bg-[#fff7ed]" />
      </div>

      <div className="p-6 border-t border-[#f3d7b6]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
            DM
          </div>
          <div>
            <p className="font-medium text-gray-900">David Martinez</p>
            <p className="text-sm text-gray-500">Operations</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
