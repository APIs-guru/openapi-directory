package operations

type GetMeQuestionsUnansweredOrderEnum string

const (
	GetMeQuestionsUnansweredOrderEnumDesc GetMeQuestionsUnansweredOrderEnum = "desc"
	GetMeQuestionsUnansweredOrderEnumAsc  GetMeQuestionsUnansweredOrderEnum = "asc"
)

type GetMeQuestionsUnansweredSortEnum string

const (
	GetMeQuestionsUnansweredSortEnumActivity GetMeQuestionsUnansweredSortEnum = "activity"
	GetMeQuestionsUnansweredSortEnumCreation GetMeQuestionsUnansweredSortEnum = "creation"
	GetMeQuestionsUnansweredSortEnumVotes    GetMeQuestionsUnansweredSortEnum = "votes"
)

type GetMeQuestionsUnansweredQueryParams struct {
	Callback *string                            `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                            `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                             `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                            `queryParam:"style=form,explode=true,name=max"`
	Min      *string                            `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeQuestionsUnansweredOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                             `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                             `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                             `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeQuestionsUnansweredSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                             `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeQuestionsUnansweredRequest struct {
	QueryParams GetMeQuestionsUnansweredQueryParams
}

type GetMeQuestionsUnansweredResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
