'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'online' | 'offline'>('loading');
  const [apiMessage, setApiMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.text())
      .then((data) => {
        setApiStatus('online');
        setApiMessage(data);
      })
      .catch(() => {
        setApiStatus('offline');
      });
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream text-brand-blue-dark flex flex-col items-center justify-center p-6 font-montserrat">
      <div className="max-w-2xl w-full bg-white border border-brand-light rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-brand-blue font-semibold">
            Proyecto Colaborar
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-brand-blue-dark mb-4 font-poppins">
          Paleta de Colores & Tipografía Configuradas
        </h1>

        <p className="text-brand-blue/80 text-lg mb-8">
          Frontend configurado con la fuente <strong className="font-poppins text-brand-blue-dark">Poppins</strong> para títulos y <strong className="font-montserrat text-brand-blue-dark">Montserrat</strong> para el cuerpo de texto y subtítulos.
        </p>

        {/* Muestra de Colores */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-brand-blue-dark font-poppins">Paleta de Colores</h2>
          <div className="grid grid-cols-5 gap-3 text-center text-xs font-semibold">
            <div className="p-4 rounded-xl bg-brand-blue-dark text-white shadow-sm">
              #0146A4
            </div>
            <div className="p-4 rounded-xl bg-brand-blue text-white shadow-sm">
              #3270C4
            </div>
            <div className="p-4 rounded-xl bg-brand-accent text-brand-blue-dark shadow-sm">
              #FFD991
            </div>
            <div className="p-4 rounded-xl bg-brand-light text-brand-blue-dark shadow-sm">
              #FFE9C0
            </div>
            <div className="p-4 rounded-xl bg-brand-cream border border-brand-light text-brand-blue-dark shadow-sm">
              #F9F6F0
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-brand-cream border border-brand-light flex flex-col justify-between">
            <span className="text-sm text-brand-blue/70 font-medium">Frontend</span>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-brand-blue-dark">Next.js</span>
              <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-brand-accent text-brand-blue-dark">
                Listo
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-cream border border-brand-light flex flex-col justify-between">
            <span className="text-sm text-brand-blue/70 font-medium">Backend API</span>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-brand-blue-dark">NestJS (Port 3001)</span>
              {apiStatus === 'loading' && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-brand-light text-brand-blue-dark">
                  Verificando...
                </span>
              )}
              {apiStatus === 'online' && (
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700">
                  Online
                </span>
              )}
              {apiStatus === 'offline' && (
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-700">
                  Offline
                </span>
              )}
            </div>
          </div>
        </div>

        {apiMessage && (
          <div className="p-4 rounded-xl bg-brand-light/50 border border-brand-accent text-brand-blue-dark text-sm">
            <span className="font-semibold">Respuesta del API:</span> &quot;{apiMessage}&quot;
          </div>
        )}
      </div>
    </main>
  );
}

