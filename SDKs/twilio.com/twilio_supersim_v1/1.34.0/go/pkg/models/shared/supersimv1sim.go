package shared

import (
	"time"
)

type SupersimV1Sim struct {
	AccountSid  *string                `json:"account_sid"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	FleetSid    *string                `json:"fleet_sid"`
	Iccid       *string                `json:"iccid"`
	Links       map[string]interface{} `json:"links"`
	Sid         *string                `json:"sid"`
	Status      *SimEnumStatusEnum     `json:"status"`
	UniqueName  *string                `json:"unique_name"`
	URL         *string                `json:"url"`
}
