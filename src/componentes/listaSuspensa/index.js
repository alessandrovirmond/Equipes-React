import './listaSuspensa.css'

const ListaSuspensa = (props) => { 
    
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterAlterado(evento.target.value)} required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa