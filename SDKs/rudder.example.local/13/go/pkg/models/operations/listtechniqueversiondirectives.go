package operations

import (
	"openapi/pkg/models/shared"
)

type ListTechniqueVersionDirectivesPathParams struct {
	TechniqueName    string `pathParam:"style=simple,explode=false,name=techniqueName"`
	TechniqueVersion string `pathParam:"style=simple,explode=false,name=techniqueVersion"`
}

type ListTechniqueVersionDirectives200ApplicationJSONActionEnum string

const (
	ListTechniqueVersionDirectives200ApplicationJSONActionEnumListTechniqueDirectives ListTechniqueVersionDirectives200ApplicationJSONActionEnum = "listTechniqueDirectives"
)

type ListTechniqueVersionDirectives200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type ListTechniqueVersionDirectives200ApplicationJSONResultEnum string

const (
	ListTechniqueVersionDirectives200ApplicationJSONResultEnumSuccess ListTechniqueVersionDirectives200ApplicationJSONResultEnum = "success"
	ListTechniqueVersionDirectives200ApplicationJSONResultEnumError   ListTechniqueVersionDirectives200ApplicationJSONResultEnum = "error"
)

type ListTechniqueVersionDirectives200ApplicationJSON struct {
	Action ListTechniqueVersionDirectives200ApplicationJSONActionEnum `json:"action"`
	Data   ListTechniqueVersionDirectives200ApplicationJSONData       `json:"data"`
	Result ListTechniqueVersionDirectives200ApplicationJSONResultEnum `json:"result"`
}

type ListTechniqueVersionDirectivesRequest struct {
	PathParams ListTechniqueVersionDirectivesPathParams
}

type ListTechniqueVersionDirectivesResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ListTechniqueVersionDirectives200ApplicationJSONObject *ListTechniqueVersionDirectives200ApplicationJSON
}
