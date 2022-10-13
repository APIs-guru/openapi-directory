package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
}

type GetWebhooksRequest struct {
	QueryParams GetWebhooksQueryParams
}

type GetWebhooksResponse struct {
	ContentType          string
	ListWebhooksResponse *shared.ListWebhooksResponse
	StatusCode           int64
}
