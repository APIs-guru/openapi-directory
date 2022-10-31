package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIWrittenstatementsStatementsQueryParams struct {
	AnsweringBodies []int32               `queryParam:"style=form,explode=true,name=answeringBodies"`
	ExpandMember    *bool                 `queryParam:"style=form,explode=true,name=expandMember"`
	House           *shared.HouseEnumEnum `queryParam:"style=form,explode=true,name=house"`
	MadeWhenFrom    *time.Time            `queryParam:"style=form,explode=true,name=madeWhenFrom"`
	MadeWhenTo      *time.Time            `queryParam:"style=form,explode=true,name=madeWhenTo"`
	Members         []int32               `queryParam:"style=form,explode=true,name=members"`
	SearchTerm      *string               `queryParam:"style=form,explode=true,name=searchTerm"`
	Skip            *int32                `queryParam:"style=form,explode=true,name=skip"`
	Take            *int32                `queryParam:"style=form,explode=true,name=take"`
	UIn             *string               `queryParam:"style=form,explode=true,name=uIN"`
}

type GetAPIWrittenstatementsStatementsRequest struct {
	QueryParams GetAPIWrittenstatementsStatementsQueryParams
}

type GetAPIWrittenstatementsStatementsResponse struct {
	Body                            []byte
	ContentType                     string
	ProblemDetails                  map[string]map[string]interface{}
	StatementsViewModelSearchResult *shared.StatementsViewModelSearchResult
	StatusCode                      int64
}
