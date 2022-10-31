package operations

type GetQuestionsUnansweredOrderEnum string

const (
	GetQuestionsUnansweredOrderEnumDesc GetQuestionsUnansweredOrderEnum = "desc"
	GetQuestionsUnansweredOrderEnumAsc  GetQuestionsUnansweredOrderEnum = "asc"
)

type GetQuestionsUnansweredSortEnum string

const (
	GetQuestionsUnansweredSortEnumActivity GetQuestionsUnansweredSortEnum = "activity"
	GetQuestionsUnansweredSortEnumCreation GetQuestionsUnansweredSortEnum = "creation"
	GetQuestionsUnansweredSortEnumVotes    GetQuestionsUnansweredSortEnum = "votes"
)

type GetQuestionsUnansweredQueryParams struct {
	Callback *string                          `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                          `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                           `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                          `queryParam:"style=form,explode=true,name=max"`
	Min      *string                          `queryParam:"style=form,explode=true,name=min"`
	Order    *GetQuestionsUnansweredOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                           `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                           `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                           `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetQuestionsUnansweredSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Tagged   *string                          `queryParam:"style=form,explode=true,name=tagged"`
	Todate   *int64                           `queryParam:"style=form,explode=true,name=todate"`
}

type GetQuestionsUnansweredRequest struct {
	QueryParams GetQuestionsUnansweredQueryParams
}

type GetQuestionsUnansweredResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
