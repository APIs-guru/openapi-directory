package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PublishedOralQuestionTimeGetQueryParams struct {
	ParametersAnsweringBodyIds   []int32    `queryParam:"style=form,explode=true,name=parameters.answeringBodyIds"`
	ParametersAnsweringDateEnd   *time.Time `queryParam:"style=form,explode=true,name=parameters.answeringDateEnd"`
	ParametersAnsweringDateStart *time.Time `queryParam:"style=form,explode=true,name=parameters.answeringDateStart"`
	ParametersDeadlineDateEnd    *time.Time `queryParam:"style=form,explode=true,name=parameters.deadlineDateEnd"`
	ParametersDeadlineDateStart  *time.Time `queryParam:"style=form,explode=true,name=parameters.deadlineDateStart"`
	ParametersOralQuestionTimeID *int32     `queryParam:"style=form,explode=true,name=parameters.oralQuestionTimeId"`
	ParametersSkip               *int32     `queryParam:"style=form,explode=true,name=parameters.skip"`
	ParametersTake               *int32     `queryParam:"style=form,explode=true,name=parameters.take"`
}

type PublishedOralQuestionTimeGetRequest struct {
	QueryParams PublishedOralQuestionTimeGetQueryParams
}

type PublishedOralQuestionTimeGetResponse struct {
	APIResponseListPublishedWrittenQuestion *shared.APIResponseListPublishedWrittenQuestion
	APIResponseObject                       *shared.APIResponseObject
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
}
