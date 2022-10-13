package shared

type ContactResponse struct {
	Data    *Contact `json:"data"`
	Success *bool    `json:"success"`
}
