package shared

type PageError struct {
	StatusCode    *int64  `json:"status_code"`
	StatusMessage *string `json:"status_message"`
}
