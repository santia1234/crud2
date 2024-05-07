import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users/', user.id)
    }

    const handleEdit = () => {
      setUserEdit(user)
      handleOpenForm()
    }

    return (
        <article className='user'>
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <ul>
            <li className="card__list"><span>Email</span><span>{user.email}</span></li>
            <li className="card__list"><span>Birthday</span><span>{user.birthday}</span></li>
          </ul>
          <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button onClick={handleEdit}>Edit</button>
        </article>
    )
}

export default UserCard