package shared

import (
	"time"
)

type ContinuousCheckEntry struct {
	Changes           []Change   `json:"changes"`
	CheckID           *string    `json:"check_id"`
	ContinuousCheckID *string    `json:"continuous_check_id"`
	CreationDate      *time.Time `json:"creation_date"`
	PreviousCheckID   *string    `json:"previous_check_id"`
}
