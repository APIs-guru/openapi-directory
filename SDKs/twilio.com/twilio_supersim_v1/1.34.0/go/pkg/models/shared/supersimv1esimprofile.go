package shared

import (
	"time"
)

type SupersimV1EsimProfile struct {
	AccountSid      *string                    `json:"account_sid"`
	DateCreated     *time.Time                 `json:"date_created"`
	DateUpdated     *time.Time                 `json:"date_updated"`
	Eid             *string                    `json:"eid"`
	ErrorCode       *string                    `json:"error_code"`
	ErrorMessage    *string                    `json:"error_message"`
	Iccid           *string                    `json:"iccid"`
	Sid             *string                    `json:"sid"`
	SimSid          *string                    `json:"sim_sid"`
	SmdpPlusAddress *string                    `json:"smdp_plus_address"`
	Status          *EsimProfileEnumStatusEnum `json:"status"`
	URL             *string                    `json:"url"`
}
