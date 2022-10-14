package shared

import (
	"time"
)

type SavedShowObject struct {
	AddedAt *time.Time            `json:"added_at,omitempty"`
	Show    *SimplifiedShowObject `json:"show,omitempty"`
}
