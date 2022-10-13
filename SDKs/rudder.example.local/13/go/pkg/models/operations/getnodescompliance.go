package operations

type GetNodesComplianceQueryParams struct {
	Level *int64 `queryParam:"style=form,explode=true,name=level"`
}

type GetNodesComplianceRequest struct {
	QueryParams GetNodesComplianceQueryParams
}

type GetNodesCompliance200ApplicationJSONActionEnum string

const (
	GetNodesCompliance200ApplicationJSONActionEnumGetNodesCompliance GetNodesCompliance200ApplicationJSONActionEnum = "getNodesCompliance"
)

type GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails struct {
	Error                      *float32 `json:"error"`
	NoReport                   *float32 `json:"noReport"`
	SuccessAlreadyOk           *float32 `json:"successAlreadyOK"`
	SuccessNotApplicable       *float32 `json:"successNotApplicable"`
	SuccessRepaired            *float32 `json:"successRepaired"`
	UnexpectedMissingComponent *float32 `json:"unexpectedMissingComponent"`
	UnexpectedUnknownComponent *float32 `json:"unexpectedUnknownComponent"`
}

type GetNodesCompliance200ApplicationJSONDataNodesModeEnum string

const (
	GetNodesCompliance200ApplicationJSONDataNodesModeEnumFullCompliance  GetNodesCompliance200ApplicationJSONDataNodesModeEnum = "full-compliance"
	GetNodesCompliance200ApplicationJSONDataNodesModeEnumChangesOnly     GetNodesCompliance200ApplicationJSONDataNodesModeEnum = "changes-only"
	GetNodesCompliance200ApplicationJSONDataNodesModeEnumReportsDisabled GetNodesCompliance200ApplicationJSONDataNodesModeEnum = "reports-disabled"
)

type GetNodesCompliance200ApplicationJSONDataNodes struct {
	Compliance        float32                                                        `json:"compliance"`
	ComplianceDetails GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails `json:"complianceDetails"`
	ID                string                                                         `json:"id"`
	Mode              GetNodesCompliance200ApplicationJSONDataNodesModeEnum          `json:"mode"`
}

type GetNodesCompliance200ApplicationJSONData struct {
	Nodes []GetNodesCompliance200ApplicationJSONDataNodes `json:"nodes"`
}

type GetNodesCompliance200ApplicationJSONResultEnum string

const (
	GetNodesCompliance200ApplicationJSONResultEnumSuccess GetNodesCompliance200ApplicationJSONResultEnum = "success"
	GetNodesCompliance200ApplicationJSONResultEnumError   GetNodesCompliance200ApplicationJSONResultEnum = "error"
)

type GetNodesCompliance200ApplicationJSON struct {
	Action GetNodesCompliance200ApplicationJSONActionEnum `json:"action"`
	Data   GetNodesCompliance200ApplicationJSONData       `json:"data"`
	Result GetNodesCompliance200ApplicationJSONResultEnum `json:"result"`
}

type GetNodesComplianceResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetNodesCompliance200ApplicationJSONObject *GetNodesCompliance200ApplicationJSON
}
