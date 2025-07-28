import { WeatherCard } from '../layout/Launches/WeatherCard';
import { LoadingSpinner } from '../layout/UI/LoadingSpinner';
// import { useStatusColors } from '../../hooks/LaunchesHooks/useStatusColors';
import { useFecthLaunchDetail } from '../../hooks/LaunchesHooks/useFecthLaunchDetail';
import BlurText from '../layout/UI/BlurText'
import { Button } from '../layout/UI/Button';
import { LaunchAgenciesCard } from '../layout/Launches/LaunchAgenciesCard';
import { LaunchVideo } from '../layout/Launches/LaunchVideo';

export const LaunchDetail = () => {

  const { data, loading } = useFecthLaunchDetail();

  return (
    <section className="bg-neutral-900 min-h-dvh w-full font-['Oxanium']">
      {loading && <LoadingSpinner />}

      {!loading && data && (
        <div className="min-h-dvh w-full">
          <div className="relative z-10 flex flex-col bg-cover bg-center bg-no-repeat 
                         h-screen sm:h-screen md:h-screen lg:h-dvh xl:h-dvh 2xl:h-dvh 
                         w-full overflow-hidden"
            style={{ backgroundImage: `url(${data.image})` }}>

            <div className="absolute inset-0 
                           bg-black/60 sm:bg-black/50 md:bg-black/45 lg:bg-black/40 xl:bg-black/40 2xl:bg-black/40"></div>

            <div className="relative z-20 flex flex-col items-center h-full justify-center text-center font-['Azonix']
                           px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                           py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">

              <BlurText
                text={data.mission.name}
                delay={50}
                animateBy="letters"
                direction="bottom"
                className="text-white font-extrabold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-10 2xl:mb-12
                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                          max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                  textWrap: 'balance'
                }}
              />

              <BlurText
                text={data.rocket.configuration.full_name}
                delay={100}
                animateBy="letters"
                direction="bottom"
                className="text-white font-extrabold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-16
                          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                          max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                  textWrap: 'balance'
                }}
              />

              <Button
                text={"Información oficial"}
                href={`${data.infoURLs[0].url}`}
                target='_blank'
                className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16
                          py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-5
                          text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl
                          uppercase shadow-xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="bg-neutral-900 min-h-dvh max-w-8xl m-auto 
                         p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 
                         flex justify-center items-center">
            <div className="rounded-2xl w-full">

              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 mb-5">

                <div className="flex-shrink-0 flex justify-center items-center lg:justify-start">
                  <div className="relative">
                    <div className="absolute rounded-2xl blur opacity-25"></div>
                    <img
                      src={data.mission_patches?.[0]?.image_url || "https://placehold.co/300x300?text=No+Patch+Found"}
                      alt="Mission Patch"
                      className="relative object-cover rounded-2xl
                                w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <h1 className="font-bold text-neutral-100 font-['Azonix'] mb-4 sm:mb-5 md:mb-6
                                  text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                      style={{ textWrap: 'balance' }}>
                      {data.mission.name}
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                                   gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6 w-full">

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-emerald-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Estado</p>
                        <p className="text-neutral-100 font-medium text-sm sm:text-base">{data.status.abbrev}</p>
                      </div>

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-blue-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Tipo de Misión</p>
                        <p className="text-neutral-100 font-medium text-sm sm:text-base">{data.mission.type}</p>
                      </div>

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-purple-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Órbita</p>
                        <p className="text-neutral-100 font-medium text-sm sm:text-base">{data.mission.orbit.name}</p>
                      </div>

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-orange-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Inicio de Ventana</p>
                        <p className="text-neutral-100 font-medium text-sm sm:text-base">
                          {new Date(data.window_start).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-red-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Final de Ventana</p>
                        <p className="text-neutral-100 font-medium text-sm sm:text-base">
                          {new Date(data.window_end).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-3 group-hover:from-red-400 transition-colors"></div>
                        <Button
                          text={"Información técnica del vuelo"}
                          href={`${data.flightclub_url}`}
                          target='_blank'
                          className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14
                                    py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4 2xl:py-4
                                    text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                                    uppercase"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent"></div>
                    <div>
                      <h3 className="font-bold text-neutral-100 font-['Azonix'] mb-3 sm:mb-4
                                    text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
                        style={{ textWrap: 'balance' }}>
                        Descripción de la Misión
                      </h3>
                      <p className="text-neutral-300 leading-relaxed font-light
                                   text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl"
                        style={{ textWrap: 'pretty' }}>
                        {data.mission.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <h2 className="font-bold text-neutral-100 font-['Azonix'] mb-4 sm:mb-5 md:mb-6
                                text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
                    style={{ textWrap: 'balance' }}>
                    Agencias Participantes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {data.mission.agencies.map(agency => (
                      <LaunchAgenciesCard key={agency.id} agency={agency} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-neutral-950 min-h-dvh flex justify-center items-center
                         p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
            <LaunchVideo vidURLs={data.vidURLs}
              style="background-image: url('${data.image})"
            />
          </div>
        </div>
      )}
    </section>
  )
}