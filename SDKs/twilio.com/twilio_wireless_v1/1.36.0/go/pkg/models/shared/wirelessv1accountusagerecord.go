package shared

type WirelessV1AccountUsageRecord struct {
	AccountSid *string      `json:"account_sid"`
	Commands   *interface{} `json:"commands"`
	Data       *interface{} `json:"data"`
	Period     *interface{} `json:"period"`
}
