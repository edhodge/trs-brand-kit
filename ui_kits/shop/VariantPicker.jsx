// VariantPicker.jsx — variant capsule pills
const VariantPicker = ({label, options, value, onChange}) => {
  return (
    <div>
      <div style={{fontSize:13,fontWeight:500,color:'#161616',marginBottom:8}}>{label}</div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {options.map(o=>{
          const sel = value===o;
          return (
            <button key={o} onClick={()=>onChange(o)} aria-checked={sel} style={{
              height:36,padding:'0 16px',borderRadius:9999,
              border: sel?'1px solid #161616':'1px solid rgba(0,0,0,.55)',
              background: sel?'#161616':'#fff',
              color: sel?'#fff':'#161616',
              fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'Aeonik',letterSpacing:'-.01em',
            }}>{o}</button>
          );
        })}
      </div>
    </div>
  );
};
window.VariantPicker = VariantPicker;
