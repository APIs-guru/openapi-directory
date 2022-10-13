package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=X-API-TOKEN"`
}
