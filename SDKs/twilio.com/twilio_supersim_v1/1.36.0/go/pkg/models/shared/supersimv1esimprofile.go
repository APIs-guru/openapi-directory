package shared

import (
"time")

type SupersimV1EsimProfile struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Eid *string `json:"eid,omitempty"`
    ErrorCode *string `json:"error_code,omitempty"`
    ErrorMessage *string `json:"error_message,omitempty"`
    Iccid *string `json:"iccid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SimSid *string `json:"sim_sid,omitempty"`
    SmdpPlusAddress *string `json:"smdp_plus_address,omitempty"`
    Status *EsimProfileEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

