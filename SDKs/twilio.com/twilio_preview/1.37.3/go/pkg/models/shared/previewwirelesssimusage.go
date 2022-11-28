package shared

type PreviewWirelessSimUsage struct {
	AccountSid    *string      `json:"account_sid,omitempty"`
	CommandsCosts *interface{} `json:"commands_costs,omitempty"`
	CommandsUsage *interface{} `json:"commands_usage,omitempty"`
	DataCosts     *interface{} `json:"data_costs,omitempty"`
	DataUsage     *interface{} `json:"data_usage,omitempty"`
	Period        *interface{} `json:"period,omitempty"`
	SimSid        *string      `json:"sim_sid,omitempty"`
	SimUniqueName *string      `json:"sim_unique_name,omitempty"`
	URL           *string      `json:"url,omitempty"`
}
