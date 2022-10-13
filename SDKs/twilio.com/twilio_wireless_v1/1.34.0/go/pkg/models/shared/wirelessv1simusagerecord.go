package shared

type WirelessV1SimUsageRecord struct {
	AccountSid *string      `json:"account_sid"`
	Commands   *interface{} `json:"commands"`
	Data       *interface{} `json:"data"`
	Period     *interface{} `json:"period"`
	SimSid     *string      `json:"sim_sid"`
}
