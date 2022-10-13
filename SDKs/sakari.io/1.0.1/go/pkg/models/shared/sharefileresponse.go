package shared

import (
	"time"
)

type ShareFileResponseData struct {
	Expires *time.Time `json:"expires"`
	Link    *string    `json:"link"`
}

type ShareFileResponse struct {
	Data    *ShareFileResponseData `json:"data"`
	Success *bool                  `json:"success"`
}
