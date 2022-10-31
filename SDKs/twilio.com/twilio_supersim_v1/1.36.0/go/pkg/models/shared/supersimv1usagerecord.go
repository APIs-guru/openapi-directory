package shared

type SupersimV1UsageRecord struct {
	AccountSid      *string      `json:"account_sid,omitempty"`
	BilledUnit      *string      `json:"billed_unit,omitempty"`
	DataDownload    *int64       `json:"data_download,omitempty"`
	DataTotal       *int64       `json:"data_total,omitempty"`
	DataTotalBilled *float64     `json:"data_total_billed,omitempty"`
	DataUpload      *int64       `json:"data_upload,omitempty"`
	FleetSid        *string      `json:"fleet_sid,omitempty"`
	IsoCountry      *string      `json:"iso_country,omitempty"`
	NetworkSid      *string      `json:"network_sid,omitempty"`
	Period          *interface{} `json:"period,omitempty"`
	SimSid          *string      `json:"sim_sid,omitempty"`
}
