package shared

import (
	"time"
)

type Feature struct {
	Created     *time.Time `json:"created"`
	Description *string    `json:"description"`
	ID          *int64     `json:"id"`
	LastUpdate  *time.Time `json:"lastUpdate"`
	Name        *string    `json:"name"`
}
