// PricingPacks.jsx — 1/2/3 sliders quantity selector
const PricingPacks = ({selected, onSelect}) => {
  const packs = [
    {qty:1, title:'1 Slider',  per:'£129.90', save:null,  badge:null},
    {qty:2, title:'2 Sliders', per:'£103.92', save:'SAVE 20%', badge:'MOST POPULAR'},
    {qty:3, title:'3 Sliders', per:'£90.93',  save:'SAVE 30%', badge:'BEST VALUE'},
  ];
  return (
    <div style={{display:'flex',gap:8,marginTop:8}}>
      {packs.map(p=>{
        const sel = selected===p.qty;
        return (
          <button key={p.qty} onClick={()=>onSelect(p.qty)} style={{
            flex:1,position:'relative',background:sel?'#fff8f9':'#fff',
            border:sel?'2px solid #cf2437':'1px solid #e4e4e4',
            borderRadius:8,padding:sel?'13px 9px 11px':'14px 10px 12px',
            cursor:'pointer',textAlign:'center',
          }}>
            {p.badge && <span style={{position:'absolute',top:-10,left:'50%',transform:'translateX(-50%)',background:p.badge==='BEST VALUE'?'#161616':'#cf2437',color:'#fff',fontSize:9,fontWeight:700,letterSpacing:'.04em',padding:'4px 9px',borderRadius:9999,whiteSpace:'nowrap'}}>{p.badge}</span>}
            <div style={{height:54,background:'#f3f3f3',borderRadius:4,marginBottom:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#969696',fontSize:11}}>×{p.qty}</div>
            <div style={{fontWeight:700,fontSize:13,color:'#161616'}}>{p.title}</div>
            <div style={{fontSize:11,color:'#5f5f5f',marginTop:2}}>{p.per} per slider</div>
            {p.save && <div style={{fontSize:10,color:'#cf2437',fontWeight:700,marginTop:4,letterSpacing:'.04em'}}>{p.save}</div>}
          </button>
        );
      })}
    </div>
  );
};
window.PricingPacks = PricingPacks;
