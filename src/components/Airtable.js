import Airtable from 'airtable'
export default new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)
