package operations

type GetNodeCompliancePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type GetNodeComplianceQueryParams struct {
	Level *int64 `queryParam:"style=form,explode=true,name=level"`
}

type GetNodeCompliance200ApplicationJSONActionEnum string

const (
	GetNodeCompliance200ApplicationJSONActionEnumGetNodeCompliance GetNodeCompliance200ApplicationJSONActionEnum = "getNodeCompliance"
)

type GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails struct {
	Error                      *float32 `json:"error,omitempty"`
	NoReport                   *float32 `json:"noReport,omitempty"`
	SuccessAlreadyOk           *float32 `json:"successAlreadyOK,omitempty"`
	SuccessNotApplicable       *float32 `json:"successNotApplicable,omitempty"`
	SuccessRepaired            *float32 `json:"successRepaired,omitempty"`
	UnexpectedMissingComponent *float32 `json:"unexpectedMissingComponent,omitempty"`
	UnexpectedUnknownComponent *float32 `json:"unexpectedUnknownComponent,omitempty"`
}

type GetNodeCompliance200ApplicationJSONDataNodesModeEnum string

const (
	GetNodeCompliance200ApplicationJSONDataNodesModeEnumFullCompliance  GetNodeCompliance200ApplicationJSONDataNodesModeEnum = "full-compliance"
	GetNodeCompliance200ApplicationJSONDataNodesModeEnumChangesOnly     GetNodeCompliance200ApplicationJSONDataNodesModeEnum = "changes-only"
	GetNodeCompliance200ApplicationJSONDataNodesModeEnumReportsDisabled GetNodeCompliance200ApplicationJSONDataNodesModeEnum = "reports-disabled"
)

type GetNodeCompliance200ApplicationJSONDataNodes struct {
	Compliance        float32                                                       `json:"compliance"`
	ComplianceDetails GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails `json:"complianceDetails"`
	ID                string                                                        `json:"id"`
	Mode              GetNodeCompliance200ApplicationJSONDataNodesModeEnum          `json:"mode"`
}

type GetNodeCompliance200ApplicationJSONData struct {
	Nodes []GetNodeCompliance200ApplicationJSONDataNodes `json:"nodes"`
}

type GetNodeCompliance200ApplicationJSONResultEnum string

const (
	GetNodeCompliance200ApplicationJSONResultEnumSuccess GetNodeCompliance200ApplicationJSONResultEnum = "success"
	GetNodeCompliance200ApplicationJSONResultEnumError   GetNodeCompliance200ApplicationJSONResultEnum = "error"
)

type GetNodeCompliance200ApplicationJSON struct {
	Action GetNodeCompliance200ApplicationJSONActionEnum `json:"action"`
	Data   GetNodeCompliance200ApplicationJSONData       `json:"data"`
	Result GetNodeCompliance200ApplicationJSONResultEnum `json:"result"`
}

type GetNodeComplianceRequest struct {
	PathParams  GetNodeCompliancePathParams
	QueryParams GetNodeComplianceQueryParams
}

type GetNodeComplianceResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetNodeCompliance200ApplicationJSONObject *GetNodeCompliance200ApplicationJSON
}
