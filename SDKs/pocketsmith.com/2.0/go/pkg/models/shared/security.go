package shared

type SchemeDeveloperKey struct {
	APIKey string `security:"name=X-Developer-Key"`
}

type Security struct {
	DeveloperKey SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
}

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}
