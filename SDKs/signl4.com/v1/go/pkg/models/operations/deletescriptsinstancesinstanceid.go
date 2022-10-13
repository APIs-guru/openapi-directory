package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScriptsInstancesInstanceIDPathParams struct {
	InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
}

type DeleteScriptsInstancesInstanceIDRequest struct {
	PathParams DeleteScriptsInstancesInstanceIDPathParams
}

type DeleteScriptsInstancesInstanceIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
