package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommandsSendQueryParams struct {
	DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
}

type GetCommandsSendRequest struct {
	QueryParams GetCommandsSendQueryParams
}

type GetCommandsSendResponse struct {
	Commands    []shared.Command
	ContentType string
	StatusCode  int64
}
