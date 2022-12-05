package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteBuyTrasactionHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

// ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell
// Definition of an single instruction(buy|sell)
type ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell struct {
	ClientOrderID       *string `json:"client_order_id,omitempty"`
	InvestmentProductID string  `json:"investment_product_id"`
	Quantity            *string `json:"quantity,omitempty"`
	Value               *string `json:"value,omitempty"`
}

// ExecuteBuyTrasactionBuyTransactionRequest
// Definition of an buy transaction request
type ExecuteBuyTrasactionBuyTransactionRequest struct {
	InvestmentInstructions []ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell `json:"investment_instructions"`
	PotID                  string                                                        `json:"pot_id"`
	RequestID              string                                                        `json:"request_id"`
}

type ExecuteBuyTrasactionSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type ExecuteBuyTrasactionRequest struct {
	Headers  ExecuteBuyTrasactionHeaders
	Request  *ExecuteBuyTrasactionBuyTransactionRequest `request:"mediaType=application/json"`
	Security ExecuteBuyTrasactionSecurity
}

type ExecuteBuyTrasactionResponse struct {
	ContentType                               string
	StatusCode                                int64
	ExecuteBuyTrasaction200ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction400ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction401ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction403ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction404ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction409ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction429ApplicationJSONAny *interface{}
	ExecuteBuyTrasaction500ApplicationJSONAny *interface{}
}
