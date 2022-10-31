package operations

import (
	"openapi/pkg/models/shared"
)

type ListScoreConfigsQueryParams struct {
	StartKey *string `queryParam:"style=form,explode=true,name=start_key"`
}

type ListScoreConfigsRequest struct {
	QueryParams ListScoreConfigsQueryParams
}

type ListScoreConfigsResponse struct {
	ContentType        string
	ScoreConfigsOutput *shared.ScoreConfigsOutput
	StatusCode         int64
}
