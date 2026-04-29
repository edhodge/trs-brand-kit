// Header.jsx — TRS Golf top bar (announcement + nav)
const Header = () => {
  return (
    <header style={{position:'sticky',top:0,zIndex:50,background:'#fff',borderBottom:'1px solid #e4e4e4'}}>
      <div style={{background:'#cf2437',color:'#fff',textAlign:'center',padding:'8px 16px',fontSize:12,fontWeight:500,letterSpacing:'-0.01em'}}>
        FREE UK SHIPPING ON ORDERS OVER £50 · 60-DAY LOWER-SCORE GUARANTEE
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 16px',height:56}}>
        <button aria-label="Menu" style={{background:'none',border:0,padding:0,cursor:'pointer'}}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="1.6" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <div style={{fontFamily:'Aeonik',fontWeight:700,fontSize:22,letterSpacing:'-0.02em',color:'#161616',display:'flex',alignItems:'center',gap:6}}>
          TRS<span style={{display:'inline-block',width:22,height:3,background:'#cf2437',transform:'skew(-20deg)',marginLeft:2}}></span>
        </div>
        <div style={{display:'flex',gap:14,alignItems:'center'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <button aria-label="Cart" style={{background:'none',border:0,padding:0,cursor:'pointer',position:'relative'}}>
            <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="1.6"><path d="M6 7h12l-1.5 12H7.5L6 7zM9 7V5a3 3 0 1 1 6 0v2"/></svg>
            <span style={{position:'absolute',top:-4,right:-6,background:'#cf2437',color:'#fff',fontSize:10,fontWeight:700,minWidth:16,height:16,borderRadius:9999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>2</span>
          </button>
        </div>
      </div>
    </header>
  );
};
window.Header = Header;
