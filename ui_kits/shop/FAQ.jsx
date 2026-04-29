// FAQ.jsx — accordion list
const FAQ = ({items}) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div>
      <h2 style={{fontFamily:'Aeonik',fontWeight:500,fontSize:24,letterSpacing:'-.02em',margin:'0 0 16px',textAlign:'center'}}>Frequently Asked Questions</h2>
      <ul style={{listStyle:'none',padding:0,margin:0,borderTop:'1px solid #e4e4e4'}}>
        {items.map((q,i)=>{
          const isOpen = open===i;
          return (
            <li key={i} style={{borderBottom:'1px solid #e4e4e4'}}>
              <button onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',background:'none',border:0,padding:'16px 0',textAlign:'left',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontFamily:'Aeonik',fontWeight:500,fontSize:14,color:'#161616'}}>
                <span style={{paddingRight:16}}>{q.q}</span>
                <span style={{color:'#5f5f5f',fontSize:18,lineHeight:1}}>{isOpen?'–':'+'}</span>
              </button>
              {isOpen && <p style={{margin:'0 0 16px',fontSize:13,color:'#5f5f5f',lineHeight:1.55}}>{q.a}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
window.FAQ = FAQ;
