package operations

import (
	"openapi/pkg/models/shared"
)

type TemplatesRemovePathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	TemplateID string `pathParam:"style=simple,explode=false,name=templateId"`
}

type TemplatesRemoveSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type TemplatesRemoveRequest struct {
	PathParams TemplatesRemovePathParams
	Security   TemplatesRemoveSecurity
}

type TemplatesRemove200ApplicationJSON struct {
	Success *bool `json:"success"`
}

type TemplatesRemoveResponse struct {
	ContentType                             string
	StatusCode                              int64
	TemplatesRemove200ApplicationJSONObject *TemplatesRemove200ApplicationJSON
}
