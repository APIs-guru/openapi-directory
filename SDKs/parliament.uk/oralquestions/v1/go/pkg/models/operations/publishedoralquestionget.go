package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PublishedOralQuestionGetParametersQuestionTypeEnum string

const (
	PublishedOralQuestionGetParametersQuestionTypeEnumSubstantive PublishedOralQuestionGetParametersQuestionTypeEnum = "Substantive"
	PublishedOralQuestionGetParametersQuestionTypeEnumTopical     PublishedOralQuestionGetParametersQuestionTypeEnum = "Topical"
)

type PublishedOralQuestionGetQueryParams struct {
	ParametersAnsweringBodyIds   []int32                                             `queryParam:"style=form,explode=true,name=parameters.answeringBodyIds"`
	ParametersAnsweringDateEnd   *time.Time                                          `queryParam:"style=form,explode=true,name=parameters.answeringDateEnd"`
	ParametersAnsweringDateStart *time.Time                                          `queryParam:"style=form,explode=true,name=parameters.answeringDateStart"`
	ParametersAskingMemberIds    []int32                                             `queryParam:"style=form,explode=true,name=parameters.askingMemberIds"`
	ParametersOralQuestionTimeID *int32                                              `queryParam:"style=form,explode=true,name=parameters.oralQuestionTimeId"`
	ParametersQuestionType       *PublishedOralQuestionGetParametersQuestionTypeEnum `queryParam:"style=form,explode=true,name=parameters.questionType"`
	ParametersSkip               *int32                                              `queryParam:"style=form,explode=true,name=parameters.skip"`
	ParametersTake               *int32                                              `queryParam:"style=form,explode=true,name=parameters.take"`
	ParametersUINs               []int32                                             `queryParam:"style=form,explode=true,name=parameters.uINs"`
}

type PublishedOralQuestionGetRequest struct {
	QueryParams PublishedOralQuestionGetQueryParams
}

type PublishedOralQuestionGetResponse struct {
	APIResponseListPublishedWrittenQuestion *shared.APIResponseListPublishedWrittenQuestion
	APIResponseObject                       *shared.APIResponseObject
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
}
