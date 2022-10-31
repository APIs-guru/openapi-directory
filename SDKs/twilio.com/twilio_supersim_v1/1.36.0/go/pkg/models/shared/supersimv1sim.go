package shared

import (
	"time"
)

type SupersimV1Sim struct {
	AccountSid  *string                `json:"account_sid,omitempty"`
	DateCreated *time.Time             `json:"date_created,omitempty"`
	DateUpdated *time.Time             `json:"date_updated,omitempty"`
	FleetSid    *string                `json:"fleet_sid,omitempty"`
	Iccid       *string                `json:"iccid,omitempty"`
	Links       map[string]interface{} `json:"links,omitempty"`
	Sid         *string                `json:"sid,omitempty"`
	Status      *SimEnumStatusEnum     `json:"status,omitempty"`
	UniqueName  *string                `json:"unique_name,omitempty"`
	URL         *string                `json:"url,omitempty"`
}
