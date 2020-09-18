import React from "react";


class SeoConfig extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('http://127.0.0.1/neo.co.th/core-api/home?select=getseo')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return <div>Next stars: {this.props.stars}</div>
  }
}

export default SeoConfig
