import React from 'react';
import { Button } from '../layout/UI/Button';

export const NotFound = () => {
    React.useEffect(() => {
        console.warn(`Intento de acceso a ruta inexistente: ${window.location.pathname}`);
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <div className="max-w-2xl mx-auto text-center">
                {/* Error Code */}
                <div className="mb-8">
                    <h1 className="text-8xl sm:text-9xl font-light text-slate-600 mb-4">
                        404
                    </h1>
                </div>

                {/* Main Content */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                        Página no encontrada
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto">
                        La página que buscas no existe o ha sido movida. Verifica la URL o utiliza la navegación para encontrar lo que necesitas.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        text={"Volver a la página principal"}
                        href={"/"}
                        className={"px-8 sm:px-12 md:px-14 lg:px-16 xl:px-18 uppercase text-sm sm:text-base"}
                    />
                </div>

            </div>
        </div>
    );
};