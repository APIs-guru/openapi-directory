package operations

import (
	"openapi/pkg/models/shared"
)

type FindFormByFormNamePathParams struct {
	FormName string `pathParam:"style=simple,explode=false,name=form_name"`
}

type FindFormByFormNameSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type FindFormByFormNameRequest struct {
	PathParams FindFormByFormNamePathParams
	Security   FindFormByFormNameSecurity
}

type FindFormByFormName200ApplicationJSON struct {
	Data interface{} `json:"data"`
}

type FindFormByFormName404ApplicationJSON struct {
	Errors []interface{} `json:"errors"`
}

type FindFormByFormNameResponse struct {
	ContentType                                string
	StatusCode                                 int64
	FindFormByFormName200ApplicationJSONObject *FindFormByFormName200ApplicationJSON
	FindFormByFormName401ApplicationJSONAny    *interface{}
	FindFormByFormName404ApplicationJSONObject *FindFormByFormName404ApplicationJSON
	FindFormByFormName429ApplicationJSONAny    *interface{}
}
