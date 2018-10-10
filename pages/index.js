import React from 'react'
import fetch from 'isomorphic-unfetch'

import Head from '../components/head'
import { Row, Col, Input, Card, Avatar, Popover } from 'antd';
import 'antd/dist/antd.min.css'
import 'animate.css/animate.min.css'

const Search = Input.Search;
const { Meta } = Card

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: false
    }
  }

  // Handle a search
  async handleSearch(query) {
    this.setState({ loading: true })
    const res = await fetch(`https://haveibeenpwned.com/api/v2/breachedaccount/${query}`)

    try {
      const data = await res.json()
      this.setState({ results: data, loading: false })
    } catch (error) {
      this.setState({ results: [], loading: false })
    }
  }

  // Returns a logo for leak
  getLogo = (name, type) => `https://haveibeenpwned.com/Content/Images/PwnedLogos/${name}.${type}`

  // Returns plain-text from HTML
  strip = (html) => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Returns fade in animation speed based on index
  getFadeInSpeed = (key) => {
    switch (key) {
      case 0:
        return 'faster'
      case 1:
        return 'fast'
      case 2:
        return 'slow'
      default:
        return 'slower'
    }
  }

  render() {

    return (
      <div>
        <Head />

        <Row type="flex" justify="center" className="animated fadeInDown">
          <h1 className="title">Sombra</h1>
          <p className="description">
            Instantly search the web for hacked data
          </p>
        </Row>

        <Row type="flex" justify="center" style={{ marginTop: '2em' }} className="animated fadeIn slow">
          <Col xs={20} sm={20} md={12}>
            <Search
              style={{ textAlign: 'center' }}
              placeholder="Search an email or username"
              enterButton
              size="large"
              onSearch={value => this.handleSearch(value)}
            />
          </Col>
        </Row>


        <Row type="flex" justify="center" style={{ marginTop: '2em', marginBottom: '2rem' }}>
          {
            this.state.loading
              ?
              <Col sm={24} md={16} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                <Card style={{ marginTop: 16 }} loading={this.state.loading}>
                  <Meta
                    title="Loading..."
                    description="Loading..."
                  />
                </Card>
              </Col>
              :
              this.state.results.map((hack, index) => (
                <Col key={hack.Name} sm={24} md={16} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                  <Popover
                    title="Information"
                    placement="bottom"
                    trigger="click"
                    content={
                      <ul>
                        {hack.DataClasses.map(e => (
                          <li>{e}</li>
                        ))}
                      </ul>
                    }>
                    <Card
                      className={'animated fadeInUp ' + this.getFadeInSpeed(index)}
                      style={{ marginTop: 16 }}
                      loading={this.state.loading}
                      hoverable>
                      <Meta
                        avatar={<Avatar src={this.getLogo(hack.Name, hack.LogoType)} />}
                        title={hack.Name}
                        description={this.strip(hack.Description)}
                      />
                    </Card>
                  </Popover>
                </Col>
              ))
          }
        </Row>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
      </div>
    )
  }
}