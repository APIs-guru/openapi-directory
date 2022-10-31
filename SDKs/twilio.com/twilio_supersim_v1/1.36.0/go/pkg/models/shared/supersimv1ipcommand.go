package shared

import (
"time")

type SupersimV1IPCommand struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DeviceIP *string `json:"device_ip,omitempty"`
    DevicePort *int64 `json:"device_port,omitempty"`
    Direction *IPCommandEnumDirectionEnum `json:"direction,omitempty"`
    Payload *string `json:"payload,omitempty"`
    PayloadType *IPCommandEnumPayloadTypeEnum `json:"payload_type,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SimIccid *string `json:"sim_iccid,omitempty"`
    SimSid *string `json:"sim_sid,omitempty"`
    Status *IPCommandEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

