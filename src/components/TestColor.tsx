'use client'
import React from 'react'
import { useTheme } from 'next-themes'

export default function TestColor() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container-custom section">
      <div className="card">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Prueba de Estilos</h2>
        
        <div className="space-y-8">
          {/* Textos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Tipografía</h3>
            <div className="space-y-2">
              <p className="text-4xl font-bold">Título Principal</p>
              <p className="text-2xl text-primary-500">Subtítulo Destacado</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Texto normal con buen contraste</p>
              <p className="font-mono text-accent-500">Texto monoespaciado para código</p>
            </div>
          </div>

          {/* Botones */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Botones</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Botón Principal
              </button>
              <button className="btn-secondary">
                Botón Secundario
              </button>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Tarjetas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="text-lg font-semibold mb-2">Proyecto 1</h4>
                <p className="text-gray-600 dark:text-gray-300">Descripción del proyecto con buen contraste en ambos temas.</p>
              </div>
              <div className="card">
                <h4 className="text-lg font-semibold mb-2">Proyecto 2</h4>
                <p className="text-gray-600 dark:text-gray-300">Otro proyecto con estilos consistentes.</p>
              </div>
            </div>
          </div>

          {/* Selector de Tema */}
          <div className="pt-6 border-t dark:border-gray-700">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="btn-secondary"
            >
              Cambiar a tema {theme === 'dark' ? 'claro' : 'oscuro'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 