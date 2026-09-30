import React from 'react';

interface Props {
  idMaterial?: string;
  ecuacion?: string;
  alto?: string;
}

export const GeoGebra = ({ idMaterial, ecuacion, alto = "500px" }: Props) => {
  // Si le pasás una ecuación, abre la calculadora gráfica automáticamente.
  // Si le pasás un ID, abre tu applet pre-armado.
  const src = ecuacion
    ? `https://www.geogebra.org/graphing?command=${encodeURIComponent(ecuacion)}`
    : `https://www.geogebra.org/material/iframe/id/${idMaterial}/border/ffffff/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false`;

  return (
    <div style={{ width: '100%', margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
      <iframe
        src={src}
        width="100%"
        height={alto}
        style={{ border: 'none', display: 'block' }}
        allowFullScreen
      />
    </div>
  );
};