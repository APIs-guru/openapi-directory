package shared

type EmployersSearchRequest struct {
	ClientID *string  `json:"client_id"`
	Products []string `json:"products"`
	Query    string   `json:"query"`
	Secret   *string  `json:"secret"`
}
