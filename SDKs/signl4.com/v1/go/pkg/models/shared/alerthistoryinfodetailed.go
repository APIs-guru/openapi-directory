package shared

import (
	"time"
)

type AlertHistoryInfoDetailed struct {
	Acknowledged        *time.Time              `json:"acknowledged,omitempty"`
	Acknowledgedgements []string                `json:"acknowledgedgements,omitempty"`
	Closed              *time.Time              `json:"closed,omitempty"`
	ClosedBy            *string                 `json:"closedBy,omitempty"`
	Created             *time.Time              `json:"created,omitempty"`
	HistoryEntries      []AlertHistoryInfoEntry `json:"historyEntries,omitempty"`
}
