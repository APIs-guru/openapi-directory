package operations

type GetMeQuestionsNoAnswersOrderEnum string

const (
	GetMeQuestionsNoAnswersOrderEnumDesc GetMeQuestionsNoAnswersOrderEnum = "desc"
	GetMeQuestionsNoAnswersOrderEnumAsc  GetMeQuestionsNoAnswersOrderEnum = "asc"
)

type GetMeQuestionsNoAnswersSortEnum string

const (
	GetMeQuestionsNoAnswersSortEnumActivity GetMeQuestionsNoAnswersSortEnum = "activity"
	GetMeQuestionsNoAnswersSortEnumCreation GetMeQuestionsNoAnswersSortEnum = "creation"
	GetMeQuestionsNoAnswersSortEnumVotes    GetMeQuestionsNoAnswersSortEnum = "votes"
)

type GetMeQuestionsNoAnswersQueryParams struct {
	Callback *string                           `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                           `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                            `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                           `queryParam:"style=form,explode=true,name=max"`
	Min      *string                           `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeQuestionsNoAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                            `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                            `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                            `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeQuestionsNoAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                            `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeQuestionsNoAnswersRequest struct {
	QueryParams GetMeQuestionsNoAnswersQueryParams
}

type GetMeQuestionsNoAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
