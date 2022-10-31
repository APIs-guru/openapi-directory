package operations

type GetQuestionsNoAnswersOrderEnum string

const (
	GetQuestionsNoAnswersOrderEnumDesc GetQuestionsNoAnswersOrderEnum = "desc"
	GetQuestionsNoAnswersOrderEnumAsc  GetQuestionsNoAnswersOrderEnum = "asc"
)

type GetQuestionsNoAnswersSortEnum string

const (
	GetQuestionsNoAnswersSortEnumActivity GetQuestionsNoAnswersSortEnum = "activity"
	GetQuestionsNoAnswersSortEnumCreation GetQuestionsNoAnswersSortEnum = "creation"
	GetQuestionsNoAnswersSortEnumVotes    GetQuestionsNoAnswersSortEnum = "votes"
)

type GetQuestionsNoAnswersQueryParams struct {
	Callback *string                         `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                         `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                          `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                         `queryParam:"style=form,explode=true,name=max"`
	Min      *string                         `queryParam:"style=form,explode=true,name=min"`
	Order    *GetQuestionsNoAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                          `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                          `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                          `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetQuestionsNoAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Tagged   *string                         `queryParam:"style=form,explode=true,name=tagged"`
	Todate   *int64                          `queryParam:"style=form,explode=true,name=todate"`
}

type GetQuestionsNoAnswersRequest struct {
	QueryParams GetQuestionsNoAnswersQueryParams
}

type GetQuestionsNoAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
