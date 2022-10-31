package shared



type EmployersSearchRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    Products []string `json:"products"`
    Query string `json:"query"`
    Secret *string `json:"secret,omitempty"`
    
}

