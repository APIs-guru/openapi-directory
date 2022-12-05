package operations

import (
	"openapi/pkg/models/shared"
)

type EvaluateRebalanceHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type EvaluateRebalanceSwitchInstructionRequestTypeEnum string

const (
	EvaluateRebalanceSwitchInstructionRequestTypeEnumPot       EvaluateRebalanceSwitchInstructionRequestTypeEnum = "pot"
	EvaluateRebalanceSwitchInstructionRequestTypeEnumInvestor  EvaluateRebalanceSwitchInstructionRequestTypeEnum = "investor"
	EvaluateRebalanceSwitchInstructionRequestTypeEnumPortfolio EvaluateRebalanceSwitchInstructionRequestTypeEnum = "portfolio"
)

// EvaluateRebalanceSwitchInstructionRequest
// Definition of Switch instruction
type EvaluateRebalanceSwitchInstructionRequest struct {
	RequestID string                                            `json:"request_id"`
	Type      EvaluateRebalanceSwitchInstructionRequestTypeEnum `json:"type"`
	Values    []string                                          `json:"values"`
}

type EvaluateRebalanceSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum string

const (
	EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnumEligible            EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = "eligible"
	EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnumIneligible          EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = "ineligible"
	EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnumNoPortfolioAttached EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = "no_portfolio_attached"
	EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnumNegativeHoldings    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = "negative_holdings"
	EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnumNoHoldings          EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = "no_holdings"
)

// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
// Each individual pot details on the rebalance request
type EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest struct {
	InvestorID                 string                                                                                                                                `json:"investor_id"`
	PortfolioDeviation         *string                                                                                                                               `json:"portfolio_deviation,omitempty"`
	PortfolioTemplateID        *string                                                                                                                               `json:"portfolio_template_id,omitempty"`
	PotID                      string                                                                                                                                `json:"pot_id"`
	RebalanceEligibilityStatus EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum `json:"rebalance_eligibility_status"`
}

// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
// contains array for pot details
type EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot struct {
	EvaluationResponse []EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest `json:"evaluation_response"`
}

type EvaluateRebalanceRequest struct {
	Headers  EvaluateRebalanceHeaders
	Request  *EvaluateRebalanceSwitchInstructionRequest `request:"mediaType=application/json"`
	Security EvaluateRebalanceSecurity
}

type EvaluateRebalanceResponse struct {
	ContentType                               string
	EvaluateRebalance400ApplicationJSONAny    *interface{}
	EvaluateRebalance401ApplicationJSONAny    *interface{}
	EvaluateRebalance403ApplicationJSONAny    *interface{}
	EvaluateRebalance404ApplicationJSONAny    *interface{}
	EvaluateRebalance409ApplicationJSONAny    *interface{}
	EvaluateRebalance429ApplicationJSONAny    *interface{}
	EvaluateRebalance500ApplicationJSONAny    *interface{}
	StatusCode                                int64
	ThisIsTheReturnObjectWithEvaluationPerPot *EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
}
