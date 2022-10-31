package shared

import (
"time")

type RpSubscriptionNotification struct {
    Properties *RpSubscriptionProperties `json:"properties,omitempty"`
    RegistrationDate *time.Time `json:"registrationDate,omitempty"`
    State *string `json:"state,omitempty"`
    
}

