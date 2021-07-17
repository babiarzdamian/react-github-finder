import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{
                    width: '60px',
                    height: '60px',
                    border: 'dotted 3px var(--primary-color)',
                }}
            />
            <h3>{login}</h3>
            <div>
                <a
                    href={html_url}
                    className="btn btn-light btn-sm my-1"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    MORE
                </a>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
