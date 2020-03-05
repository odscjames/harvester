const Settings = {
  // There is no good reason some start "elasticsearch" and some start "elastic". Sorry.
  "elasticsearchUsername": process.env.ELASTICSEARCH_USERNAME,
  "elasticsearchPassword": process.env.ELASTICSEARCH_PASSWORD,
  "elasticsearchURL": process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  "elasticIndexRaw": "open-active-raw-jb",
  "elasticIndexStage1State": "open-active-raw-harvester-state-jb",
  "elasticIndexNormalised": "open-active-normalised-jb",
  "elasticIndexStage2State": "open-active-stage-2-state-jb",
  "registryURL": "https://raw.githubusercontent.com/odscjames/openactive-sources/master/datasets.json"
  // For dev, can also do
  //"registryURL": "http://localhost:3001'"
}

export default Settings;
