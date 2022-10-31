package operations

type GetMeQuestionsUnacceptedOrderEnum string

const (
	GetMeQuestionsUnacceptedOrderEnumDesc GetMeQuestionsUnacceptedOrderEnum = "desc"
	GetMeQuestionsUnacceptedOrderEnumAsc  GetMeQuestionsUnacceptedOrderEnum = "asc"
)

type GetMeQuestionsUnacceptedSortEnum string

const (
	GetMeQuestionsUnacceptedSortEnumActivity GetMeQuestionsUnacceptedSortEnum = "activity"
	GetMeQuestionsUnacceptedSortEnumCreation GetMeQuestionsUnacceptedSortEnum = "creation"
	GetMeQuestionsUnacceptedSortEnumVotes    GetMeQuestionsUnacceptedSortEnum = "votes"
)

type GetMeQuestionsUnacceptedQueryParams struct {
	Callback *string                            `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                            `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                             `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                            `queryParam:"style=form,explode=true,name=max"`
	Min      *string                            `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeQuestionsUnacceptedOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                             `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                             `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                             `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeQuestionsUnacceptedSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                             `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeQuestionsUnacceptedRequest struct {
	QueryParams GetMeQuestionsUnacceptedQueryParams
}

type GetMeQuestionsUnacceptedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
