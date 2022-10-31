package operations

import (
	"openapi/pkg/models/shared"
)

type ListWebhooksV1QueryParams struct {
	Page     *int32 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID  string `queryParam:"style=form,explode=true,name=payorId"`
}

type ListWebhooksV1Request struct {
	QueryParams ListWebhooksV1QueryParams
}

type ListWebhooksV1Response struct {
	ContentType       string
	StatusCode        int64
	WebhooksResponse  *shared.WebhooksResponse
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
}
