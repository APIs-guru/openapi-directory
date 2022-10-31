package shared

type SchemeBearerToken struct {
	Authorization string `security:"name=Authorization"`
}
