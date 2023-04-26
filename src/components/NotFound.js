const NotFound = ({onNotFound}) => {
    return(
        <div>
            <h1 style={{color: 'white'}}>No result :(</h1>
            <input className="button" type="btn" defaultValue='Вернуться на главную страницу' onClick={() => onNotFound()}/>
        </div>
    )
}

export default NotFound