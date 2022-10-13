package shared

import (
	"time"
)

type TrunkingV1TrunkDisasterRecoveryMethodEnum string

const (
	TrunkingV1TrunkDisasterRecoveryMethodEnumHead   TrunkingV1TrunkDisasterRecoveryMethodEnum = "HEAD"
	TrunkingV1TrunkDisasterRecoveryMethodEnumGet    TrunkingV1TrunkDisasterRecoveryMethodEnum = "GET"
	TrunkingV1TrunkDisasterRecoveryMethodEnumPost   TrunkingV1TrunkDisasterRecoveryMethodEnum = "POST"
	TrunkingV1TrunkDisasterRecoveryMethodEnumPatch  TrunkingV1TrunkDisasterRecoveryMethodEnum = "PATCH"
	TrunkingV1TrunkDisasterRecoveryMethodEnumPut    TrunkingV1TrunkDisasterRecoveryMethodEnum = "PUT"
	TrunkingV1TrunkDisasterRecoveryMethodEnumDelete TrunkingV1TrunkDisasterRecoveryMethodEnum = "DELETE"
)

type TrunkingV1Trunk struct {
	AccountSid             *string                                    `json:"account_sid"`
	AuthType               *string                                    `json:"auth_type"`
	AuthTypeSet            []string                                   `json:"auth_type_set"`
	CnamLookupEnabled      *bool                                      `json:"cnam_lookup_enabled"`
	DateCreated            *time.Time                                 `json:"date_created"`
	DateUpdated            *time.Time                                 `json:"date_updated"`
	DisasterRecoveryMethod *TrunkingV1TrunkDisasterRecoveryMethodEnum `json:"disaster_recovery_method"`
	DisasterRecoveryURL    *string                                    `json:"disaster_recovery_url"`
	DomainName             *string                                    `json:"domain_name"`
	FriendlyName           *string                                    `json:"friendly_name"`
	Links                  map[string]interface{}                     `json:"links"`
	Recording              *interface{}                               `json:"recording"`
	Secure                 *bool                                      `json:"secure"`
	Sid                    *string                                    `json:"sid"`
	TransferCallerID       *TrunkEnumTransferCallerIDEnum             `json:"transfer_caller_id"`
	TransferMode           *TrunkEnumTransferSettingEnum              `json:"transfer_mode"`
	URL                    *string                                    `json:"url"`
}
