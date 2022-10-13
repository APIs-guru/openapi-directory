package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIWrittenquestionsQuestionsQueryParams struct {
	Answered          *shared.AnsweredEnum           `queryParam:"style=form,explode=true,name=answered"`
	AnsweredWhenFrom  *time.Time                     `queryParam:"style=form,explode=true,name=answeredWhenFrom"`
	AnsweredWhenTo    *time.Time                     `queryParam:"style=form,explode=true,name=answeredWhenTo"`
	AnsweringBodies   []int32                        `queryParam:"style=form,explode=true,name=answeringBodies"`
	AnsweringMemberID *int32                         `queryParam:"style=form,explode=true,name=answeringMemberId"`
	AskingMemberID    *int32                         `queryParam:"style=form,explode=true,name=askingMemberId"`
	CorrectedWhenFrom *time.Time                     `queryParam:"style=form,explode=true,name=correctedWhenFrom"`
	CorrectedWhenTo   *time.Time                     `queryParam:"style=form,explode=true,name=correctedWhenTo"`
	ExpandMember      *bool                          `queryParam:"style=form,explode=true,name=expandMember"`
	House             *shared.HouseEnumEnum          `queryParam:"style=form,explode=true,name=house"`
	IncludeWithdrawn  *bool                          `queryParam:"style=form,explode=true,name=includeWithdrawn"`
	Members           []int32                        `queryParam:"style=form,explode=true,name=members"`
	QuestionStatus    *shared.QuestionStatusEnumEnum `queryParam:"style=form,explode=true,name=questionStatus"`
	SearchTerm        *string                        `queryParam:"style=form,explode=true,name=searchTerm"`
	Skip              *int32                         `queryParam:"style=form,explode=true,name=skip"`
	TabledWhenFrom    *time.Time                     `queryParam:"style=form,explode=true,name=tabledWhenFrom"`
	TabledWhenTo      *time.Time                     `queryParam:"style=form,explode=true,name=tabledWhenTo"`
	Take              *int32                         `queryParam:"style=form,explode=true,name=take"`
	UIn               *string                        `queryParam:"style=form,explode=true,name=uIN"`
}

type GetAPIWrittenquestionsQuestionsRequest struct {
	QueryParams GetAPIWrittenquestionsQuestionsQueryParams
}

type GetAPIWrittenquestionsQuestionsResponse struct {
	Body                           []byte
	ContentType                    string
	ProblemDetails                 map[string]map[string]interface{}
	QuestionsViewModelSearchResult *shared.QuestionsViewModelSearchResult
	StatusCode                     int64
}
