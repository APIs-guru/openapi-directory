package shared

import (
	"time"
)

type AlertHistoryInfoDetailed struct {
	Acknowledged        *time.Time              `json:"acknowledged"`
	Acknowledgedgements []string                `json:"acknowledgedgements"`
	Closed              *time.Time              `json:"closed"`
	ClosedBy            *string                 `json:"closedBy"`
	Created             *time.Time              `json:"created"`
	HistoryEntries      []AlertHistoryInfoEntry `json:"historyEntries"`
}
