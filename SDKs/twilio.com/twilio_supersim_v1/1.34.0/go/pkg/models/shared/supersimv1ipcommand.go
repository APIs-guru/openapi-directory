package shared

import (
	"time"
)

type SupersimV1IPCommand struct {
	AccountSid  *string                       `json:"account_sid"`
	DateCreated *time.Time                    `json:"date_created"`
	DateUpdated *time.Time                    `json:"date_updated"`
	DeviceIP    *string                       `json:"device_ip"`
	DevicePort  *int64                        `json:"device_port"`
	Direction   *IPCommandEnumDirectionEnum   `json:"direction"`
	Payload     *string                       `json:"payload"`
	PayloadType *IPCommandEnumPayloadTypeEnum `json:"payload_type"`
	Sid         *string                       `json:"sid"`
	SimIccid    *string                       `json:"sim_iccid"`
	SimSid      *string                       `json:"sim_sid"`
	Status      *IPCommandEnumStatusEnum      `json:"status"`
	URL         *string                       `json:"url"`
}
