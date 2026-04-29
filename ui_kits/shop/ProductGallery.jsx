// ProductGallery.jsx — main product image carousel
const ProductGallery = ({images, idx, setIdx}) => {
  return (
    <div style={{position:'relative',background:'#f3f3f3'}}>
      <div style={{aspectRatio:'1/1',width:'100%',background:'#e9e9e9',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src={images[idx]} alt="TRS Slider" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
      <div style={{position:'absolute',bottom:14,left:0,right:0,display:'flex',justifyContent:'center',gap:6}}>
        {images.map((_, i) => (
          <button key={i} onClick={()=>setIdx(i)} aria-label={"Go to slide "+(i+1)} style={{width:8,height:8,padding:0,borderRadius:9999,border:0,background:i===idx?'#161616':'rgba(0,0,0,.3)',cursor:'pointer'}}/>
        ))}
      </div>
      <span style={{position:'absolute',top:14,left:14,background:'#161616',color:'#fff',fontSize:10,fontWeight:700,letterSpacing:'.04em',textTransform:'uppercase',padding:'4px 10px',borderRadius:9999}}>Tour Proven</span>
    </div>
  );
};
window.ProductGallery = ProductGallery;
