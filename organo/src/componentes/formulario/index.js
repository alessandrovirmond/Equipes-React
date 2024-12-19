import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import Botao from '../botao'
import './formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Font-End',
        'Data Science',
        'Dev Ops'
    ]

    const aoSalvar = () => {

    }
    return (
        <section className='formulario'> 
            <form onSubmit={
                aoSalvar
            }>
                <h2>Preencha s dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
            <ListaSuspensa obrigatorio={true} label='Time' itens={times} />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario