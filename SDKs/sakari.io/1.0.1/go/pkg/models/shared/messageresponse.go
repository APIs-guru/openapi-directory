package shared

type MessageResponse struct {
	Data    *Message `json:"data"`
	Success *bool    `json:"success"`
}
