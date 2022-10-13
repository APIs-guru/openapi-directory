package shared

type SupersimV1UsageRecord struct {
	AccountSid      *string      `json:"account_sid"`
	BilledUnit      *string      `json:"billed_unit"`
	DataDownload    *int64       `json:"data_download"`
	DataTotal       *int64       `json:"data_total"`
	DataTotalBilled *float64     `json:"data_total_billed"`
	DataUpload      *int64       `json:"data_upload"`
	FleetSid        *string      `json:"fleet_sid"`
	IsoCountry      *string      `json:"iso_country"`
	NetworkSid      *string      `json:"network_sid"`
	Period          *interface{} `json:"period"`
	SimSid          *string      `json:"sim_sid"`
}
