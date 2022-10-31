package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIWrittenstatementsStatementsDateUinPathParams struct {
	Date time.Time `pathParam:"style=simple,explode=false,name=date"`
	Uin  string    `pathParam:"style=simple,explode=false,name=uin"`
}

type GetAPIWrittenstatementsStatementsDateUinQueryParams struct {
	ExpandMember *bool `queryParam:"style=form,explode=true,name=expandMember"`
}

type GetAPIWrittenstatementsStatementsDateUinRequest struct {
	PathParams  GetAPIWrittenstatementsStatementsDateUinPathParams
	QueryParams GetAPIWrittenstatementsStatementsDateUinQueryParams
}

type GetAPIWrittenstatementsStatementsDateUinResponse struct {
	Body                    []byte
	ContentType             string
	ProblemDetails          map[string]map[string]interface{}
	StatementsViewModelItem *shared.StatementsViewModelItem
	StatusCode              int64
}
