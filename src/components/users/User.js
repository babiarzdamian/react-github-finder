import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    };

    render() {
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
        } = this.props.user;

        const { loading, repos } = this.props;

        if (loading) return <Spinner />;

        return (
            <Fragment>
                <Link to="/" className="btn btn-light">
                    Back to search
                </Link>
                Hireable:{' '}
                {hireable ? (
                    <i className="fas fa-check text-success"></i>
                ) : (
                    <i className="fas fa-times-circle text-danger"></i>
                )}
                <div className="card grid-2">
                    <div className="all-center">
                        <img
                            src={avatar_url}
                            className="round-img"
                            style={{ width: '150px', height: '150px' }}
                            alt=""
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className="btn btn-secondary my-1">
                            Visit github profile
                        </a>
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        Username: <strong>{login}</strong>
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        Company: <strong>{company}</strong>
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        Website: <strong>{blog}</strong>
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="caard text-center">
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-success">
                        Following: {following}
                    </div>
                    <div className="badge badge-secondary">
                        Public repos: {public_repos}
                    </div>
                    <div className="badge badge-light">
                        Public gists: {public_gists}
                    </div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        );
    }
}

export default User;
