package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteSwitchTrasactionHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum string

const (
	ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumPercentage ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = "percentage"
	ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumUnit       ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = "unit"
	ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumValue      ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = "value"
)

// ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
// Each individual buy side and sell side instruction of the Switch request
type ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest struct {
	InvestmentProductID string                                                                                            `json:"investment_product_id"`
	Mode                ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum `json:"mode"`
	Value               string                                                                                            `json:"value"`
}

// ExecuteSwitchTrasactionSwitchInstructionRequest
// Definition of Switch instruction
type ExecuteSwitchTrasactionSwitchInstructionRequest struct {
	BuyInstructions  []ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest `json:"buy_instructions"`
	PotID            string                                                                                      `json:"pot_id"`
	RequestID        string                                                                                      `json:"request_id"`
	SellInstructions []ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest `json:"sell_instructions"`
}

type ExecuteSwitchTrasactionSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type ExecuteSwitchTrasactionRequest struct {
	Headers  ExecuteSwitchTrasactionHeaders
	Request  *ExecuteSwitchTrasactionSwitchInstructionRequest `request:"mediaType=application/json"`
	Security ExecuteSwitchTrasactionSecurity
}

type ExecuteSwitchTrasactionResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ExecuteSwitchTrasaction200ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction400ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction401ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction403ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction404ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction409ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction429ApplicationJSONAny *interface{}
	ExecuteSwitchTrasaction500ApplicationJSONAny *interface{}
}
