import { QueryJson, Datasource } from "@budibase/types"
const { integrations } = require("../index")

export async function makeExternalQuery(
  datasource: Datasource,
  json: QueryJson
) {
  const Integration = integrations[datasource.source]
  // query is the opinionated function
  if (Integration.prototype.query) {
    const integration = new Integration(datasource.config)
    return integration.query(json)
  } else {
    throw "Datasource does not support query."
  }
}
