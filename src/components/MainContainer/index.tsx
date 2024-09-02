import PersonalData from '../PersonalData'

export default function MainContainer() {
  return (
    <div className="text-slate-100 min-h-dvh max-w-screen-xl m-auto flex flex-1 flex-row justify-between gap-4 lg:px-8 md:px-4">
      <header className="w-1/2 max-h-screen lg:py-12 lg:sticky lg:top-0">
        <PersonalData />
      </header>
      <div className="w-1/2">
        <div>hola mundo 2</div>
        <div>hola mundo 2</div>
        <div>hola mundo 2</div>
        <div>hola mundo 2</div>
        <div>hola mundo 2</div>
      </div>
    </div>
  )
}
