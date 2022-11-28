package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=exp-api-key"`
}

type SchemeLegacyAPIKey struct {
	APIKey string `security:"name=apiKey"`
}

type Security struct {
	APIKey       *SchemeAPIKey       `security:"scheme,type=apiKey,subtype=header"`
	LegacyAPIKey *SchemeLegacyAPIKey `security:"scheme,type=apiKey,subtype=query"`
}
