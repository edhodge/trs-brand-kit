// BuyBox.jsx — primary ADD TO CART with price + savings
const BuyBox = ({price, was, onAdd, added}) => {
  return (
    <div style={{marginTop:14}}>
      <button onClick={onAdd} style={{
        width:'100%',height:60,background:added?'#161616':'#cf2437',color:'#fff',
        border: added?'1px solid #161616':'1px solid #9c1827',
        borderRadius:2,fontFamily:'Aeonik',fontWeight:700,fontSize:16,letterSpacing:'-.02em',
        textTransform:'uppercase',cursor:'pointer',
        display:'flex',alignItems:'center',justifyContent:'center',gap:10,
        transition:'background 160ms ease',
      }}>
        <span>{added?'ADDED TO CART':'ADD TO CART'}</span>
        {!added && <>
          <span style={{width:4,height:4,borderRadius:9999,background:'#fff',display:'inline-block'}}></span>
          <span style={{display:'inline-flex',gap:8,alignItems:'baseline'}}>
            <span>{price}</span>
            <span style={{textDecoration:'line-through',opacity:.6,fontWeight:500}}>{was}</span>
          </span>
        </>}
      </button>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginTop:14,fontSize:13}}>
        <span style={{position:'relative',width:14,height:14,display:'inline-block'}}>
          <span style={{position:'absolute',inset:0,borderRadius:9999,background:'rgba(92,211,63,.25)'}}></span>
          <span style={{position:'absolute',left:4,top:4,width:6,height:6,borderRadius:9999,background:'#5cd33f'}}></span>
        </span>
        <span style={{color:'#1c1c1c'}}>In stock — delivered to you by January 01</span>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',gap:10,marginTop:12,fontSize:12,color:'#5f5f5f'}}>
        <span>🚚 Fast-tracked shipping</span><span>🇬🇧 UK</span><span>60-day money back</span>
      </div>
    </div>
  );
};
window.BuyBox = BuyBox;
