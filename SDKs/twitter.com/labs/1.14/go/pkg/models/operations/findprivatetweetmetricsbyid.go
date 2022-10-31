package operations

import (
	"openapi/pkg/models/shared"
)

type FindPrivateTweetMetricsByIDQueryParams struct {
	Ids []string `queryParam:"style=form,explode=false,name=ids"`
}

type FindPrivateTweetMetricsByIDRequest struct {
	QueryParams FindPrivateTweetMetricsByIDQueryParams
}

type FindPrivateTweetMetricsByIDResponse struct {
	ContentType          string
	Error                *interface{}
	Problem              *interface{}
	StatusCode           int64
	TweetMetricsResponse *shared.TweetMetricsResponse
}
