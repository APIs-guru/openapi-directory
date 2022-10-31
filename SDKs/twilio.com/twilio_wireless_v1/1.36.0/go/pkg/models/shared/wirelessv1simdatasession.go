package shared

import (
	"time"
)

type WirelessV1SimDataSession struct {
	AccountSid           *string      `json:"account_sid,omitempty"`
	CellID               *string      `json:"cell_id,omitempty"`
	CellLocationEstimate *interface{} `json:"cell_location_estimate,omitempty"`
	End                  *time.Time   `json:"end,omitempty"`
	Imei                 *string      `json:"imei,omitempty"`
	LastUpdated          *time.Time   `json:"last_updated,omitempty"`
	OperatorCountry      *string      `json:"operator_country,omitempty"`
	OperatorMcc          *string      `json:"operator_mcc,omitempty"`
	OperatorMnc          *string      `json:"operator_mnc,omitempty"`
	OperatorName         *string      `json:"operator_name,omitempty"`
	PacketsDownloaded    *int64       `json:"packets_downloaded,omitempty"`
	PacketsUploaded      *int64       `json:"packets_uploaded,omitempty"`
	RadioLink            *string      `json:"radio_link,omitempty"`
	Sid                  *string      `json:"sid,omitempty"`
	SimSid               *string      `json:"sim_sid,omitempty"`
	Start                *time.Time   `json:"start,omitempty"`
}
