import Image from "next/image";
import Link from "next/link";

export default function Valid() {
  return (
    <>
      <div className="flex flex-col fixed top-0 border border-dotted bg-slate-400 border-slate-600 left-0 right-0 gap-4 p-4 text-center items-center">
        <p>Solo visible para administradores</p>
        <Link
          href="/dashboard"
          className="flex w-full justify-center rounded-md max-w-[270px] bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Ir a panel administrativo
        </Link>
      </div>
      <main className="flex flex-col gap-8 min-h-screen items-center justify-center text-gray-900">
        <div className="flex items-center justify-between sm:mx-auto sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Tus datos se han comprobado
          </h2>
        </div>
        <div className="flex flex-col w-80 justify-center items-center">
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center">
                  <p>Se validó que tus datos son correctos.</p>
                  <Image
                    src="/checkmark.svg"
                    alt="checkmark icon"
                    width={48}
                    height={48}
                    color="green"
                  />
                </div>

                <div>
                  <Link
                    href="/"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
