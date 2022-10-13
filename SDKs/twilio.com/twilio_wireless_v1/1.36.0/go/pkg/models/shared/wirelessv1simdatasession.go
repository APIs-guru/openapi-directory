package shared

import (
	"time"
)

type WirelessV1SimDataSession struct {
	AccountSid           *string      `json:"account_sid"`
	CellID               *string      `json:"cell_id"`
	CellLocationEstimate *interface{} `json:"cell_location_estimate"`
	End                  *time.Time   `json:"end"`
	Imei                 *string      `json:"imei"`
	LastUpdated          *time.Time   `json:"last_updated"`
	OperatorCountry      *string      `json:"operator_country"`
	OperatorMcc          *string      `json:"operator_mcc"`
	OperatorMnc          *string      `json:"operator_mnc"`
	OperatorName         *string      `json:"operator_name"`
	PacketsDownloaded    *int64       `json:"packets_downloaded"`
	PacketsUploaded      *int64       `json:"packets_uploaded"`
	RadioLink            *string      `json:"radio_link"`
	Sid                  *string      `json:"sid"`
	SimSid               *string      `json:"sim_sid"`
	Start                *time.Time   `json:"start"`
}
