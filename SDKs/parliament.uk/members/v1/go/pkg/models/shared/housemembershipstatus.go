package shared

import (
	"time"
)

type HouseMembershipStatus struct {
	StatusDescription *string    `json:"statusDescription"`
	StatusID          *int32     `json:"statusId"`
	StatusIsActive    *bool      `json:"statusIsActive"`
	StatusNotes       *string    `json:"statusNotes"`
	StatusStartDate   *time.Time `json:"statusStartDate"`
}
