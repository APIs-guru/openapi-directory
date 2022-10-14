package shared

import (
	"time"
)

type HouseMembershipStatus struct {
	StatusDescription *string    `json:"statusDescription,omitempty"`
	StatusID          *int32     `json:"statusId,omitempty"`
	StatusIsActive    *bool      `json:"statusIsActive,omitempty"`
	StatusNotes       *string    `json:"statusNotes,omitempty"`
	StatusStartDate   *time.Time `json:"statusStartDate,omitempty"`
}
