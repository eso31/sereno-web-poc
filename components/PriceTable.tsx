'use client'
import { useState } from 'react'

type Location = 'local' | 'foraneo'

const PRICES: Record<Location, { size: string; tradicional: string; cerezo: string; honey: string }[]> = {
  local: [
    { size: '1 kg',  tradicional: '$300', cerezo: '$320', honey: '$450' },
    { size: '500 g', tradicional: '$150', cerezo: '$160', honey: '$225' },
    { size: '250 g', tradicional: '$75',  cerezo: '$80',  honey: '$112' },
  ],
  foraneo: [
    { size: '1 kg',  tradicional: '$360', cerezo: '$400', honey: '$500' },
    { size: '500 g', tradicional: '$180', cerezo: '$200', honey: '$250' },
    { size: '250 g', tradicional: '$90',  cerezo: '$100', honey: '$125' },
  ],
}

export default function PriceTable() {
  const [location, setLocation] = useState<Location>('foraneo')
  const rows = PRICES[location]

  return (
    <div className="overflow-hidden rounded-lg bg-[#FAF7F2] shadow-md">
      {/* Toggle */}
      <div className="flex items-center gap-2 px-5 pt-5 pb-3">
        <span className="text-xs font-medium text-brand-dark/60 mr-1">Precios para:</span>
        <div className="inline-flex rounded-full border border-brand-beige/40 overflow-hidden text-sm font-medium">
          <button
            onClick={() => setLocation('local')}
            className={`px-4 py-1.5 transition-colors ${
              location === 'local'
                ? 'text-white'
                : 'text-brand-dark/70 hover:bg-brand-beige/20'
            }`}
            style={location === 'local' ? { background: 'var(--brand-caramel)' } : {}}
          >
            Local
          </button>
          <button
            onClick={() => setLocation('foraneo')}
            className={`px-4 py-1.5 transition-colors ${
              location === 'foraneo'
                ? 'text-white'
                : 'text-brand-dark/70 hover:bg-brand-beige/20'
            }`}
            style={location === 'foraneo' ? { background: 'var(--brand-caramel)' } : {}}
          >
            Foráneo
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-5 pb-5">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-sm products-table">
            <thead>
              <tr className="text-left">
                <th className="p-3">Tamaño</th>
                <th className="p-3">Tradicional</th>
                <th className="p-3">Cerezo</th>
                <th className="p-3">Honey</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.size} className="border-t">
                  <td className="p-3 font-medium">{row.size}</td>
                  <td className="p-3">{row.tradicional}</td>
                  <td className="p-3">{row.cerezo}</td>
                  <td className="p-3">{row.honey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-brand-dark/50">
          * Precios en pesos mexicanos (MXN). Sujetos a cambio sin previo aviso.
        </p>
      </div>
    </div>
  )
}
