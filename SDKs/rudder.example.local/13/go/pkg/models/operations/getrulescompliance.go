package operations

type GetRulesComplianceQueryParams struct {
	Level *int64 `queryParam:"style=form,explode=true,name=level"`
}

type GetRulesComplianceRequest struct {
	QueryParams GetRulesComplianceQueryParams
}

type GetRulesCompliance200ApplicationJSONActionEnum string

const (
	GetRulesCompliance200ApplicationJSONActionEnumGetRulesCompliance GetRulesCompliance200ApplicationJSONActionEnum = "getRulesCompliance"
)

type GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails struct {
	Error                      *float32 `json:"error"`
	NoReport                   *float32 `json:"noReport"`
	SuccessAlreadyOk           *float32 `json:"successAlreadyOK"`
	SuccessNotApplicable       *float32 `json:"successNotApplicable"`
	SuccessRepaired            *float32 `json:"successRepaired"`
	UnexpectedMissingComponent *float32 `json:"unexpectedMissingComponent"`
	UnexpectedUnknownComponent *float32 `json:"unexpectedUnknownComponent"`
}

type GetRulesCompliance200ApplicationJSONDataRulesModeEnum string

const (
	GetRulesCompliance200ApplicationJSONDataRulesModeEnumFullCompliance  GetRulesCompliance200ApplicationJSONDataRulesModeEnum = "full-compliance"
	GetRulesCompliance200ApplicationJSONDataRulesModeEnumChangesOnly     GetRulesCompliance200ApplicationJSONDataRulesModeEnum = "changes-only"
	GetRulesCompliance200ApplicationJSONDataRulesModeEnumReportsDisabled GetRulesCompliance200ApplicationJSONDataRulesModeEnum = "reports-disabled"
)

type GetRulesCompliance200ApplicationJSONDataRules struct {
	Compliance        float32                                                        `json:"compliance"`
	ComplianceDetails GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails `json:"complianceDetails"`
	ID                string                                                         `json:"id"`
	Mode              GetRulesCompliance200ApplicationJSONDataRulesModeEnum          `json:"mode"`
}

type GetRulesCompliance200ApplicationJSONData struct {
	Rules []GetRulesCompliance200ApplicationJSONDataRules `json:"rules"`
}

type GetRulesCompliance200ApplicationJSONResultEnum string

const (
	GetRulesCompliance200ApplicationJSONResultEnumSuccess GetRulesCompliance200ApplicationJSONResultEnum = "success"
	GetRulesCompliance200ApplicationJSONResultEnumError   GetRulesCompliance200ApplicationJSONResultEnum = "error"
)

type GetRulesCompliance200ApplicationJSON struct {
	Action GetRulesCompliance200ApplicationJSONActionEnum `json:"action"`
	Data   GetRulesCompliance200ApplicationJSONData       `json:"data"`
	Result GetRulesCompliance200ApplicationJSONResultEnum `json:"result"`
}

type GetRulesComplianceResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetRulesCompliance200ApplicationJSONObject *GetRulesCompliance200ApplicationJSON
}
