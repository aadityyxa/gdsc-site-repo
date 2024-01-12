import PropTypes from 'prop-types';


export default function ApplicationForm({activeRoles}) {

    return(
        <>
            <form action="" className='join-us-form'>

                <div className="input-element">
                    <label htmlFor="role">Preferred Role</label>
                    <select name="role" id="role">
                        {activeRoles.map(role => <option key={activeRoles.indexOf(role)}>{role}</option>)}
                    </select>
                </div>

                <button type="submit">
                    Fill the application
                </button>

            </form>
        </>
    )
}

ApplicationForm.propTypes = {
    activeRoles: PropTypes.array
}

