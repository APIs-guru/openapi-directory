package shared

import (
	"time"
)

type SavedShowObject struct {
	AddedAt *time.Time            `json:"added_at"`
	Show    *SimplifiedShowObject `json:"show"`
}
