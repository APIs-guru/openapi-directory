package shared

import (
"time")

type VerifyV2ServiceEntityChallenge struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateResponded *time.Time `json:"date_responded,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Details *interface{} `json:"details,omitempty"`
    EntitySid *string `json:"entity_sid,omitempty"`
    ExpirationDate *time.Time `json:"expiration_date,omitempty"`
    FactorSid *string `json:"factor_sid,omitempty"`
    FactorType *ChallengeEnumFactorTypesEnum `json:"factor_type,omitempty"`
    HiddenDetails *interface{} `json:"hidden_details,omitempty"`
    Identity *string `json:"identity,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Metadata *interface{} `json:"metadata,omitempty"`
    RespondedReason *ChallengeEnumChallengeReasonsEnum `json:"responded_reason,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *ChallengeEnumChallengeStatusesEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

