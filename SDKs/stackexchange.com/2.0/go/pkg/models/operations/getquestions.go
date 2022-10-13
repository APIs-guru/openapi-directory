package operations

type GetQuestionsOrderEnum string

const (
	GetQuestionsOrderEnumDesc GetQuestionsOrderEnum = "desc"
	GetQuestionsOrderEnumAsc  GetQuestionsOrderEnum = "asc"
)

type GetQuestionsSortEnum string

const (
	GetQuestionsSortEnumActivity  GetQuestionsSortEnum = "activity"
	GetQuestionsSortEnumCreation  GetQuestionsSortEnum = "creation"
	GetQuestionsSortEnumVotes     GetQuestionsSortEnum = "votes"
	GetQuestionsSortEnumHot       GetQuestionsSortEnum = "hot"
	GetQuestionsSortEnumWeek      GetQuestionsSortEnum = "week"
	GetQuestionsSortEnumMonth     GetQuestionsSortEnum = "month"
	GetQuestionsSortEnumRelevance GetQuestionsSortEnum = "relevance"
)

type GetQuestionsQueryParams struct {
	Callback *string                `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                 `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                `queryParam:"style=form,explode=true,name=max"`
	Min      *string                `queryParam:"style=form,explode=true,name=min"`
	Order    *GetQuestionsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                 `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                 `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetQuestionsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Tagged   *string                `queryParam:"style=form,explode=true,name=tagged"`
	Todate   *int64                 `queryParam:"style=form,explode=true,name=todate"`
}

type GetQuestionsRequest struct {
	QueryParams GetQuestionsQueryParams
}

type GetQuestionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
