function Card(props){
    const {src , className, para , para1, heading ,width,height} = props;
    return(
      <div className={className}>
        <img width={width} height={height} src={src}/>
        <p>{para}</p>
        <p>{para1}</p>
        <h4>{heading}</h4>
      </div>
    )

}
export default Card;