package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlertsRequests struct {
	RaiseAlertInfo  *shared.RaiseAlertInfo `request:"mediaType=application/*+json"`
	RaiseAlertInfo1 *shared.RaiseAlertInfo `request:"mediaType=application/json"`
	RaiseAlertInfo2 *shared.RaiseAlertInfo `request:"mediaType=application/json-patch+json"`
	RaiseAlertInfo3 *shared.RaiseAlertInfo `request:"mediaType=text/json"`
}

type PostAlertsRequest struct {
	Request *PostAlertsRequests
}

type PostAlertsResponse struct {
	AlertInfo            *shared.AlertInfo
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
