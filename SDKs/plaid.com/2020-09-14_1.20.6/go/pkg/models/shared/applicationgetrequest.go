package shared

// ApplicationGetRequest
// ApplicationGetResponse defines the schema for `/application/get`
type ApplicationGetRequest struct {
	ApplicationID string `json:"application_id"`
	ClientID      string `json:"client_id"`
	Secret        string `json:"secret"`
}
