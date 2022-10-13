package shared

import (
	"time"
)

type OldUsernameContract struct {
	Date    *time.Time `json:"date"`
	OldName *string    `json:"oldName"`
}
