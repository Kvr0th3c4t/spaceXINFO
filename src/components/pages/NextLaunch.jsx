import { Button } from '../layout/UI/Button'
import { LaunchCountdown } from '../layout/NextLaunch/LaunchCountdown'
import launchpadImg from '../../assets/LaunchesImg/launchpad.webp'

export const NextLaunch = () => {
  return (
    <section className="text-neutral-100">
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed 
                   min-h-screen sm:min-h-screen md:min-h-screen lg:min-h-screen xl:h-dvh 2xl:h-dvh 
                   w-full overflow-hidden 
                   py-8 sm:py-10 md:py-12 lg:py-16 xl:py-0 2xl:py-0"
        style={{ backgroundImage: `url(${launchpadImg})` }}
      >
        <div className=" 
                       font-['Azonix'] 
                       w-full sm:w-full md:w-full lg:w-3xl xl:w-7xl 2xl:w-full
                       p-4 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-10 
                       rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl 2xl:rounded-3xl
                       my-4 sm:my-6 md:my-8 lg:my-10 xl:my-0 2xl:my-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 
                        mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-8 
                        text-center">
            PRÓXIMO LANZAMIENTO
          </h1>
          <LaunchCountdown></LaunchCountdown>
        </div>
      </div >
    </section >
  )
}