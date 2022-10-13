package shared

import (
	"time"
)

type DeleteRangeInfo struct {
	From *time.Time `json:"from"`
	To   *time.Time `json:"to"`
}
