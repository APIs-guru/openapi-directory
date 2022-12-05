package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRebalanceHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateRebalanceSwitchInstructionRequestTypeEnum string

const (
	CreateRebalanceSwitchInstructionRequestTypeEnumPot       CreateRebalanceSwitchInstructionRequestTypeEnum = "pot"
	CreateRebalanceSwitchInstructionRequestTypeEnumInvestor  CreateRebalanceSwitchInstructionRequestTypeEnum = "investor"
	CreateRebalanceSwitchInstructionRequestTypeEnumPortfolio CreateRebalanceSwitchInstructionRequestTypeEnum = "portfolio"
)

// CreateRebalanceSwitchInstructionRequest
// Definition of Switch instruction
type CreateRebalanceSwitchInstructionRequest struct {
	RequestID string                                          `json:"request_id"`
	Type      CreateRebalanceSwitchInstructionRequestTypeEnum `json:"type"`
	Values    []string                                        `json:"values"`
}

type CreateRebalanceSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateRebalanceRequest struct {
	Headers  CreateRebalanceHeaders
	Request  *CreateRebalanceSwitchInstructionRequest `request:"mediaType=application/json"`
	Security CreateRebalanceSecurity
}

type CreateRebalanceResponse struct {
	ContentType                          string
	CreateRebalance201ApplicationJSONAny *interface{}
	CreateRebalance400ApplicationJSONAny *interface{}
	CreateRebalance401ApplicationJSONAny *interface{}
	CreateRebalance403ApplicationJSONAny *interface{}
	CreateRebalance404ApplicationJSONAny *interface{}
	CreateRebalance409ApplicationJSONAny *interface{}
	CreateRebalance429ApplicationJSONAny *interface{}
	CreateRebalance500ApplicationJSONAny *interface{}
	StatusCode                           int64
}
