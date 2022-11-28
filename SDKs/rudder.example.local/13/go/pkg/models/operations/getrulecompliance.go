package operations

type GetRuleCompliancePathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type GetRuleComplianceQueryParams struct {
	Level *int64 `queryParam:"style=form,explode=true,name=level"`
}

type GetRuleCompliance200ApplicationJSONActionEnum string

const (
	GetRuleCompliance200ApplicationJSONActionEnumGetRuleCompliance GetRuleCompliance200ApplicationJSONActionEnum = "getRuleCompliance"
)

type GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails struct {
	Error                      *float32 `json:"error,omitempty"`
	NoReport                   *float32 `json:"noReport,omitempty"`
	SuccessAlreadyOk           *float32 `json:"successAlreadyOK,omitempty"`
	SuccessNotApplicable       *float32 `json:"successNotApplicable,omitempty"`
	SuccessRepaired            *float32 `json:"successRepaired,omitempty"`
	UnexpectedMissingComponent *float32 `json:"unexpectedMissingComponent,omitempty"`
	UnexpectedUnknownComponent *float32 `json:"unexpectedUnknownComponent,omitempty"`
}

type GetRuleCompliance200ApplicationJSONDataRulesModeEnum string

const (
	GetRuleCompliance200ApplicationJSONDataRulesModeEnumFullCompliance  GetRuleCompliance200ApplicationJSONDataRulesModeEnum = "full-compliance"
	GetRuleCompliance200ApplicationJSONDataRulesModeEnumChangesOnly     GetRuleCompliance200ApplicationJSONDataRulesModeEnum = "changes-only"
	GetRuleCompliance200ApplicationJSONDataRulesModeEnumReportsDisabled GetRuleCompliance200ApplicationJSONDataRulesModeEnum = "reports-disabled"
)

type GetRuleCompliance200ApplicationJSONDataRules struct {
	Compliance        float32                                                       `json:"compliance"`
	ComplianceDetails GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails `json:"complianceDetails"`
	ID                string                                                        `json:"id"`
	Mode              GetRuleCompliance200ApplicationJSONDataRulesModeEnum          `json:"mode"`
}

type GetRuleCompliance200ApplicationJSONData struct {
	Rules []GetRuleCompliance200ApplicationJSONDataRules `json:"rules"`
}

type GetRuleCompliance200ApplicationJSONResultEnum string

const (
	GetRuleCompliance200ApplicationJSONResultEnumSuccess GetRuleCompliance200ApplicationJSONResultEnum = "success"
	GetRuleCompliance200ApplicationJSONResultEnumError   GetRuleCompliance200ApplicationJSONResultEnum = "error"
)

type GetRuleCompliance200ApplicationJSON struct {
	Action GetRuleCompliance200ApplicationJSONActionEnum `json:"action"`
	Data   GetRuleCompliance200ApplicationJSONData       `json:"data"`
	Result GetRuleCompliance200ApplicationJSONResultEnum `json:"result"`
}

type GetRuleComplianceRequest struct {
	PathParams  GetRuleCompliancePathParams
	QueryParams GetRuleComplianceQueryParams
}

type GetRuleComplianceResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetRuleCompliance200ApplicationJSONObject *GetRuleCompliance200ApplicationJSON
}
