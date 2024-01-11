import memberSocialArrow from '../../assets/miscellaneous/Vector 55.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MemberCard({teamMemberImage, name, designation}) {


    return(
                            <div className="team-member-card">
                        <img src={teamMemberImage} alt="" id='team-member-image'/>
                        <h3 className="member-name">{name}</h3>
                        <span className="member-designation">{designation}</span>

                        <div className="member-social-links">
                            <Link className='member-social-link'>Linkedin</Link>
                            <Link className='member-social-link'>Mail</Link>
                            <div className="member-link-arrow">
                                <img src={memberSocialArrow} alt="" />
                            </div>
                        </div>
                    </div>
    )
}

MemberCard.propTypes = {
    teamMemberImage:PropTypes.string,
    name:PropTypes.string,
    designation:PropTypes.string,


}


