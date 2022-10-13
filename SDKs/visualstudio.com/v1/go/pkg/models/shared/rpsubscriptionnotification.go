package shared

import (
	"time"
)

type RpSubscriptionNotification struct {
	Properties       *RpSubscriptionProperties `json:"properties"`
	RegistrationDate *time.Time                `json:"registrationDate"`
	State            *string                   `json:"state"`
}
