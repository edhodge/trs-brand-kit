// Footer.jsx — minimal footer
const Footer = () => (
  <footer style={{background:'#121212',color:'#fff',padding:'40px 16px 24px',marginTop:50}}>
    <div style={{fontFamily:'Aeonik',fontWeight:700,fontSize:24,letterSpacing:'-.02em',display:'flex',alignItems:'center',gap:6}}>
      TRS<span style={{display:'inline-block',width:24,height:4,background:'#cf2437',transform:'skew(-20deg)'}}></span>
    </div>
    <p style={{margin:'12px 0 24px',fontSize:13,opacity:.75,lineHeight:1.55,maxWidth:260}}>Tour-proven training aids designed by Robert Rock. Built for golfers who want their changes to last.</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,fontSize:12}}>
      <div>
        <div style={{textTransform:'uppercase',letterSpacing:'.04em',fontWeight:700,marginBottom:10,opacity:.6,fontSize:10}}>Shop</div>
        <ul style={{listStyle:'none',padding:0,margin:0,lineHeight:2}}>
          <li>TRS Slider</li><li>TRS Ball</li><li>Gloves</li><li>Bundles</li>
        </ul>
      </div>
      <div>
        <div style={{textTransform:'uppercase',letterSpacing:'.04em',fontWeight:700,marginBottom:10,opacity:.6,fontSize:10}}>Help</div>
        <ul style={{listStyle:'none',padding:0,margin:0,lineHeight:2}}>
          <li>Shipping</li><li>Returns</li><li>Sizing</li><li>Contact</li>
        </ul>
      </div>
    </div>
    <div style={{borderTop:'1px solid #2a2a2a',marginTop:32,paddingTop:16,fontSize:11,opacity:.55}}>© TRS Golf Ltd. UK.</div>
  </footer>
);
window.Footer = Footer;
