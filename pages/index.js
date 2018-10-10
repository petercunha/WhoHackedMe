import React from 'react'
import fetch from 'isomorphic-unfetch'

import Head from '../components/head'
import { Row, Col, Input, Card, Avatar, Popover, Layout } from 'antd';
import 'antd/dist/antd.min.css'
import 'animate.css/animate.min.css'

const Search = Input.Search;
const { Content, Footer } = Layout;
const { Meta } = Card

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: false,
      searched: false,
    }
  }

  // Handle a search
  async handleSearch(query) {
    this.setState({ loading: true, searched: true })
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

        <Layout style={{ minHeight: '100vh' }}>
          <Content>
            <Row type="flex" justify="center" className="animated fadeIn">
              <h1 className="title">Who hacked me?</h1>
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
                  <>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                      <Card style={{ marginTop: 16 }} loading={this.state.loading}>
                        <Meta
                          title="Loading..."
                          description="Loading..."
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                      <Card style={{ marginTop: 16 }} loading={this.state.loading}>
                        <Meta
                          title="Loading..."
                          description="Loading..."
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                      <Card style={{ marginTop: 16 }} loading={this.state.loading}>
                        <Meta
                          title="Loading..."
                          description="Loading..."
                        />
                      </Card>
                    </Col>
                  </>
                  :
                  <>
                    {
                      this.state.searched
                      ? 
                        <Col span={24} style={{ margin: '1em'}}>
                          <p className="leak_description">Your data appeared in <b>{this.state.results.length}</b> database leaks</p>
                        </Col>
                      :
                      <></>
                    }
                    {
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
                </>
              }
            </Row>
          </Content>

          <Footer>
            <Row  type="flex" justify="center">
              <Col span={24} style={{ textAlign: 'center' }}>
                <a className="footer" href="https://github.com/petercunha/WhoHackedMe">Github</a>
                <a className="footer"> • </a>
                <a className="footer" href="https://wintermute.technology">Wintermute Technology</a>
                <a className="footer"> • </a>
                <a className="footer" href="https://haveibeenpwned.com/API/v2">API</a>
              </Col>
            </Row>
          </Footer>
        </Layout>
        

        

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
      .leak_description {
        text-align: center;
        color: #888;
      }
      .footer {
        color: #AAA;
        font-size: 0.9em;
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