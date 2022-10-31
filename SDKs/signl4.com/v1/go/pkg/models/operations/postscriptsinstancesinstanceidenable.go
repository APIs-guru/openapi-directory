package operations

import (
	"openapi/pkg/models/shared"
)

type PostScriptsInstancesInstanceIDEnablePathParams struct {
	InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
}

type PostScriptsInstancesInstanceIDEnableRequest struct {
	PathParams PostScriptsInstancesInstanceIDEnablePathParams
}

type PostScriptsInstancesInstanceIDEnableResponse struct {
	Body                  []byte
	ContentType           string
	ErrorResponseContent  *shared.ErrorResponseContent
	ScriptInstanceDetails *shared.ScriptInstanceDetails
	StatusCode            int64
}
