package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlertsPagedQueryParams struct {
	MaxResults *int32  `queryParam:"style=form,explode=true,name=maxResults"`
	UserID     *string `queryParam:"style=form,explode=true,name=userId"`
}

type PostAlertsPagedRequests struct {
	AlertFilterPublic  *shared.AlertFilterPublic `request:"mediaType=application/*+json"`
	AlertFilterPublic1 *shared.AlertFilterPublic `request:"mediaType=application/json"`
	AlertFilterPublic2 *shared.AlertFilterPublic `request:"mediaType=application/json-patch+json"`
	AlertFilterPublic3 *shared.AlertFilterPublic `request:"mediaType=text/json"`
}

type PostAlertsPagedRequest struct {
	QueryParams PostAlertsPagedQueryParams
	Request     *PostAlertsPagedRequests
}

type PostAlertsPagedResponse struct {
	Body                            []byte
	ContentType                     string
	ErrorResponseContent            *shared.ErrorResponseContent
	OverviewAlertPagedResultsPublic *shared.OverviewAlertPagedResultsPublic
	StatusCode                      int64
}
