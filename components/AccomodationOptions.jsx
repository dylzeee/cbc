import React, { Component } from 'react'
import styles from '../styles/AccomodationOptions.module.css'
import Image from 'next/image'
import { FaSuperpowers } from 'react-icons/fa';

export default class AccomodationOptionsSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <section className={styles.accomodationSection}>
        <div className="uCenterText">
          <h3>Variety Of Accomodation Options</h3>
        </div>
        <div className={styles.accomodationRow}>
          {data.map(({ id, ...otherProps }) => (
            <AccomodationOptions
              key={id}
              {...otherProps}
            />
          ))}
        </div>
      </section>
    )
  }
}

class AccomodationOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className={styles.optionsBox}>
        <AccomodationOptionsTitle title={this.props.title} image={this.props.image} button={this.props.button} />
        <AccomodationOptionsImage title={this.props.image} image={this.props.image} button={this.props.button} />
        <AccomodationOptionsButton title={this.props.button} image={this.props.image} button={this.props.button} />
      </div>
    )
  }

}

class AccomodationOptionsTitle extends Component {
  render() {
    return (
      <>
        <div className={styles.text}>
          <h2 className={styles.title}>{this.props.title}</h2>
          <span>{"<<<"}</span>
        </div>
        <hr className={styles.hr} />
      </>
    )
  }
}

class AccomodationOptionsImage extends Component {
  render() {
    console.log(this.props.image);
    return (
      <Image
        src={this.props.image}
        width={300}
        height={300}
        alt={'Camping'}
      />
    )
  }
}

class AccomodationOptionsButton extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>{this.props.button}</p>
        <span>{">>>"}</span>
      </div>
    )
  }

}