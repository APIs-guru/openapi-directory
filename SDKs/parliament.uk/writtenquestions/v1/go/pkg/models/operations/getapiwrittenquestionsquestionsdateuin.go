package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIWrittenquestionsQuestionsDateUinPathParams struct {
	Date time.Time `pathParam:"style=simple,explode=false,name=date"`
	Uin  string    `pathParam:"style=simple,explode=false,name=uin"`
}

type GetAPIWrittenquestionsQuestionsDateUinQueryParams struct {
	ExpandMember *bool `queryParam:"style=form,explode=true,name=expandMember"`
}

type GetAPIWrittenquestionsQuestionsDateUinRequest struct {
	PathParams  GetAPIWrittenquestionsQuestionsDateUinPathParams
	QueryParams GetAPIWrittenquestionsQuestionsDateUinQueryParams
}

type GetAPIWrittenquestionsQuestionsDateUinResponse struct {
	Body                   []byte
	ContentType            string
	ProblemDetails         map[string]map[string]interface{}
	QuestionsViewModelItem *shared.QuestionsViewModelItem
	StatusCode             int64
}
