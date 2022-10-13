package shared

import (
	"time"
)

type VerifyV2ServiceEntityChallenge struct {
	AccountSid      *string                             `json:"account_sid"`
	DateCreated     *time.Time                          `json:"date_created"`
	DateResponded   *time.Time                          `json:"date_responded"`
	DateUpdated     *time.Time                          `json:"date_updated"`
	Details         *interface{}                        `json:"details"`
	EntitySid       *string                             `json:"entity_sid"`
	ExpirationDate  *time.Time                          `json:"expiration_date"`
	FactorSid       *string                             `json:"factor_sid"`
	FactorType      *ChallengeEnumFactorTypesEnum       `json:"factor_type"`
	HiddenDetails   *interface{}                        `json:"hidden_details"`
	Identity        *string                             `json:"identity"`
	Links           map[string]interface{}              `json:"links"`
	Metadata        *interface{}                        `json:"metadata"`
	RespondedReason *ChallengeEnumChallengeReasonsEnum  `json:"responded_reason"`
	ServiceSid      *string                             `json:"service_sid"`
	Sid             *string                             `json:"sid"`
	Status          *ChallengeEnumChallengeStatusesEnum `json:"status"`
	URL             *string                             `json:"url"`
}
