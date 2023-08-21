function Radioinput({adatatadas, fuggvenyatadas}) {

  return (
    <div className="buborek">
      <div>
        <label><h3 className="kerdes">{adatatadas.kerdes}</h3></label>
      </div>
      <div>
        <input onChange={fuggvenyatadas} type="radio" name={adatatadas.kerdes} value={adatatadas.valasz1}  />{adatatadas.valasz1}<br/>
        <input onChange={fuggvenyatadas} type="radio" name={adatatadas.kerdes} value={adatatadas.valasz2} />{adatatadas.valasz2}<br/>
        <input onChange={fuggvenyatadas} type="radio" name={adatatadas.kerdes} value={adatatadas.valasz3} />{adatatadas.valasz3}
      </div>
    </div>    
  )
}

export default Radioinput