package shared

type PreviewWirelessSimUsage struct {
	AccountSid    *string      `json:"account_sid"`
	CommandsCosts *interface{} `json:"commands_costs"`
	CommandsUsage *interface{} `json:"commands_usage"`
	DataCosts     *interface{} `json:"data_costs"`
	DataUsage     *interface{} `json:"data_usage"`
	Period        *interface{} `json:"period"`
	SimSid        *string      `json:"sim_sid"`
	SimUniqueName *string      `json:"sim_unique_name"`
	URL           *string      `json:"url"`
}
