package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIWrittenquestionsQuestionsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIWrittenquestionsQuestionsIDQueryParams struct {
	ExpandMember *bool `queryParam:"style=form,explode=true,name=expandMember"`
}

type GetAPIWrittenquestionsQuestionsIDRequest struct {
	PathParams  GetAPIWrittenquestionsQuestionsIDPathParams
	QueryParams GetAPIWrittenquestionsQuestionsIDQueryParams
}

type GetAPIWrittenquestionsQuestionsIDResponse struct {
	Body                   []byte
	ContentType            string
	ProblemDetails         map[string]map[string]interface{}
	QuestionsViewModelItem *shared.QuestionsViewModelItem
	StatusCode             int64
}
