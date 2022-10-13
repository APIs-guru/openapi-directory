package shared

import (
	"time"
)

type Example struct {
	CreatedAt *time.Time `json:"createdAt"`
	ID        int64      `json:"id"`
	Label     *Label     `json:"label"`
	Location  *string    `json:"location"`
	Name      string     `json:"name"`
	Object    *string    `json:"object"`
}
