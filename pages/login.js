import { React, useContext, Component } from 'react'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '../components/Layout';
import styles from '../styles/Login.module.css'

export default class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

  }
  componentDidUpdate() {

  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <Layout title='User Login'>
        <div className={styles.authBox}>
          <div className={styles.auth}>
            <h3 className={styles.title}><FaUser /> User Login</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='email' className={styles.label}>Email Address</label>
                <input type="email" id="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor='password' className={styles.label}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <input type="submit" value="Login" className={styles.btn} />
            </form>
            <p>Don&apos;t have an account? <Link href='/account/register'>Register</Link></p>
          </div>
        </div>
      </Layout>
    )
  }
}

//LoginPage.contextType = AuthContext

