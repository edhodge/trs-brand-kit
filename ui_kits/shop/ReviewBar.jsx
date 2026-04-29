// ReviewBar.jsx — 5-star red rating + count
const ReviewBar = () => {
  const star = (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="#cf2437"><polygon points="9,1 11.3,6.6 17,7 12.6,11 14,17 9,13.7 4,17 5.4,11 1,7 6.7,6.6"/></svg>
  );
  return (
    <div style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#161616'}}>
      <span style={{display:'inline-flex',gap:2}}>{[0,1,2,3,4].map(i=><span key={i}>{star}</span>)}</span>
      <span><strong style={{fontWeight:700}}>50,000+</strong> golfers rate this <strong style={{fontWeight:700}}>4.8/5.0</strong></span>
    </div>
  );
};
window.ReviewBar = ReviewBar;
