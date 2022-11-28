package shared

type WirelessV1SimUsageRecord struct {
	AccountSid *string      `json:"account_sid,omitempty"`
	Commands   *interface{} `json:"commands,omitempty"`
	Data       *interface{} `json:"data,omitempty"`
	Period     *interface{} `json:"period,omitempty"`
	SimSid     *string      `json:"sim_sid,omitempty"`
}
