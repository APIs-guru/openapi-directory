package shared

import (
	"time"
)

type ErrorResponse struct {
	Code    *string
	Date    *time.Time
	Message *string
}
