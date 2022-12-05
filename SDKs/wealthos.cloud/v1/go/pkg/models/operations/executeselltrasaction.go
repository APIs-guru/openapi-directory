package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteSellTrasactionHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

// ExecuteSellTrasactionSellTransactionRequestInstructionBuySell
// Definition of an single instruction(buy|sell)
type ExecuteSellTrasactionSellTransactionRequestInstructionBuySell struct {
	ClientOrderID       *string `json:"client_order_id,omitempty"`
	InvestmentProductID string  `json:"investment_product_id"`
	Quantity            *string `json:"quantity,omitempty"`
	Value               *string `json:"value,omitempty"`
}

// ExecuteSellTrasactionSellTransactionRequest
// Definition of an sell transaction request
type ExecuteSellTrasactionSellTransactionRequest struct {
	PotID            string                                                          `json:"pot_id"`
	RequestID        string                                                          `json:"request_id"`
	SellInstructions []ExecuteSellTrasactionSellTransactionRequestInstructionBuySell `json:"sell_instructions"`
}

type ExecuteSellTrasactionSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type ExecuteSellTrasactionRequest struct {
	Headers  ExecuteSellTrasactionHeaders
	Request  *ExecuteSellTrasactionSellTransactionRequest `request:"mediaType=application/json"`
	Security ExecuteSellTrasactionSecurity
}

type ExecuteSellTrasactionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ExecuteSellTrasaction200ApplicationJSONAny *interface{}
	ExecuteSellTrasaction400ApplicationJSONAny *interface{}
	ExecuteSellTrasaction401ApplicationJSONAny *interface{}
	ExecuteSellTrasaction403ApplicationJSONAny *interface{}
	ExecuteSellTrasaction404ApplicationJSONAny *interface{}
	ExecuteSellTrasaction409ApplicationJSONAny *interface{}
	ExecuteSellTrasaction429ApplicationJSONAny *interface{}
	ExecuteSellTrasaction500ApplicationJSONAny *interface{}
}
