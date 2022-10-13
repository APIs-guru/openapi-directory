package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlertsAcknowledgeAllQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type PostAlertsAcknowledgeAllRequests struct {
	ChangeAlertStatusFilterInfo  *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/*+json"`
	ChangeAlertStatusFilterInfo1 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/json"`
	ChangeAlertStatusFilterInfo2 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=application/json-patch+json"`
	ChangeAlertStatusFilterInfo3 *shared.ChangeAlertStatusFilterInfo `request:"mediaType=text/json"`
}

type PostAlertsAcknowledgeAllRequest struct {
	QueryParams PostAlertsAcknowledgeAllQueryParams
	Request     *PostAlertsAcknowledgeAllRequests
}

type PostAlertsAcknowledgeAllResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
