package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlertsAlertIDAnnotatePathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type PostAlertsAlertIDAnnotateRequests struct {
	AlertAnnotationInfo  *shared.AlertAnnotationInfo `request:"mediaType=application/*+json"`
	AlertAnnotationInfo1 *shared.AlertAnnotationInfo `request:"mediaType=application/json"`
	AlertAnnotationInfo2 *shared.AlertAnnotationInfo `request:"mediaType=application/json-patch+json"`
	AlertAnnotationInfo3 *shared.AlertAnnotationInfo `request:"mediaType=text/json"`
}

type PostAlertsAlertIDAnnotateRequest struct {
	PathParams PostAlertsAlertIDAnnotatePathParams
	Request    *PostAlertsAlertIDAnnotateRequests
}

type PostAlertsAlertIDAnnotateResponse struct {
	AlertAnnotationInfo  *shared.AlertAnnotationInfo
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
