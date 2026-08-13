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
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            Monorepo Inicializado
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Colaborar App
        </h1>

        <p className="text-slate-400 text-lg mb-8">
          Frontend con <strong>Next.js (App Router)</strong> & Backend con <strong>NestJS + MongoDB</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <span className="text-sm text-slate-400 font-medium">Frontend</span>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-slate-200">Next.js 16</span>
              <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Activo
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <span className="text-sm text-slate-400 font-medium">Backend API</span>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-slate-200">NestJS (Port 3001)</span>
              {apiStatus === 'loading' && (
                <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Verificando...
                </span>
              )}
              {apiStatus === 'online' && (
                <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Online
                </span>
              )}
              {apiStatus === 'offline' && (
                <span className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Offline
                </span>
              )}
            </div>
          </div>
        </div>

        {apiMessage && (
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-sm">
            <span className="font-semibold">Respuesta del API:</span> &quot;{apiMessage}&quot;
          </div>
        )}
      </div>
    </main>
  );
}

