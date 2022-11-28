package shared

import (
	"time"
)

type SupersimV1SettingsUpdate struct {
	DateCompleted *time.Time                    `json:"date_completed,omitempty"`
	DateCreated   *time.Time                    `json:"date_created,omitempty"`
	DateUpdated   *time.Time                    `json:"date_updated,omitempty"`
	Iccid         *string                       `json:"iccid,omitempty"`
	Packages      []interface{}                 `json:"packages,omitempty"`
	Sid           *string                       `json:"sid,omitempty"`
	SimSid        *string                       `json:"sim_sid,omitempty"`
	Status        *SettingsUpdateEnumStatusEnum `json:"status,omitempty"`
}
