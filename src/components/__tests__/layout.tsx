import * as React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby" // mocked

import Layout from "../layout"

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  }));
})

describe(`Layout`, () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <main>
            <h1>hello</h1>
          </main>
        </Layout>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})