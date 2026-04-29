// TrustList.jsx — bullet list with check images
const TrustList = ({items}) => {
  return (
    <ul style={{listStyle:'none',padding:0,margin:'12px 0 0',display:'flex',flexDirection:'column',gap:8}}>
      {items.map((t,i)=>(
        <li key={i} style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:'#161616'}}>
          <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#cf2437"/><path d="M5 9.2 7.7 12 13 6.5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
};
window.TrustList = TrustList;
