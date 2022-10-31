package shared

import (
"time")


type TrunkingV1TrunkDisasterRecoveryMethodEnum string

const (
    TrunkingV1TrunkDisasterRecoveryMethodEnumHead TrunkingV1TrunkDisasterRecoveryMethodEnum = "HEAD"
TrunkingV1TrunkDisasterRecoveryMethodEnumGet TrunkingV1TrunkDisasterRecoveryMethodEnum = "GET"
TrunkingV1TrunkDisasterRecoveryMethodEnumPost TrunkingV1TrunkDisasterRecoveryMethodEnum = "POST"
TrunkingV1TrunkDisasterRecoveryMethodEnumPatch TrunkingV1TrunkDisasterRecoveryMethodEnum = "PATCH"
TrunkingV1TrunkDisasterRecoveryMethodEnumPut TrunkingV1TrunkDisasterRecoveryMethodEnum = "PUT"
TrunkingV1TrunkDisasterRecoveryMethodEnumDelete TrunkingV1TrunkDisasterRecoveryMethodEnum = "DELETE"
)


type TrunkingV1Trunk struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AuthType *string `json:"auth_type,omitempty"`
    AuthTypeSet []string `json:"auth_type_set,omitempty"`
    CnamLookupEnabled *bool `json:"cnam_lookup_enabled,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DisasterRecoveryMethod *TrunkingV1TrunkDisasterRecoveryMethodEnum `json:"disaster_recovery_method,omitempty"`
    DisasterRecoveryURL *string `json:"disaster_recovery_url,omitempty"`
    DomainName *string `json:"domain_name,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Recording *interface{} `json:"recording,omitempty"`
    Secure *bool `json:"secure,omitempty"`
    Sid *string `json:"sid,omitempty"`
    TransferCallerID *TrunkEnumTransferCallerIDEnum `json:"transfer_caller_id,omitempty"`
    TransferMode *TrunkEnumTransferSettingEnum `json:"transfer_mode,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

