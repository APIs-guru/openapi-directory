package operations

type GetMeQuestionsOrderEnum string

const (
	GetMeQuestionsOrderEnumDesc GetMeQuestionsOrderEnum = "desc"
	GetMeQuestionsOrderEnumAsc  GetMeQuestionsOrderEnum = "asc"
)

type GetMeQuestionsSortEnum string

const (
	GetMeQuestionsSortEnumActivity GetMeQuestionsSortEnum = "activity"
	GetMeQuestionsSortEnumCreation GetMeQuestionsSortEnum = "creation"
	GetMeQuestionsSortEnumVotes    GetMeQuestionsSortEnum = "votes"
)

type GetMeQuestionsQueryParams struct {
	Callback *string                  `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                  `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                   `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                  `queryParam:"style=form,explode=true,name=max"`
	Min      *string                  `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeQuestionsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                   `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                   `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                   `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeQuestionsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                   `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeQuestionsRequest struct {
	QueryParams GetMeQuestionsQueryParams
}

type GetMeQuestionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
