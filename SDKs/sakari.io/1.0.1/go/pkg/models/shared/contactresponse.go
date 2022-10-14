package shared

type ContactResponse struct {
	Data    *Contact `json:"data,omitempty"`
	Success *bool    `json:"success,omitempty"`
}
