package shared

type SchemeDeveloperKey struct {
	APIKey string `security:"name=x-api-key"`
}
