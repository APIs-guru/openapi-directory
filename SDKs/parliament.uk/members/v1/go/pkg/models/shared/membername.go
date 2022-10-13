package shared

import (
	"time"
)

type MemberName struct {
	EndDate       *time.Time `json:"endDate"`
	NameAddressAs *string    `json:"nameAddressAs"`
	NameDisplayAs *string    `json:"nameDisplayAs"`
	NameFullTitle *string    `json:"nameFullTitle"`
	NameListAs    *string    `json:"nameListAs"`
	StartDate     *time.Time `json:"startDate"`
}
