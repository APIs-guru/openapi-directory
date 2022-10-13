package operations

type GetMeAnswersOrderEnum string

const (
	GetMeAnswersOrderEnumDesc GetMeAnswersOrderEnum = "desc"
	GetMeAnswersOrderEnumAsc  GetMeAnswersOrderEnum = "asc"
)

type GetMeAnswersSortEnum string

const (
	GetMeAnswersSortEnumActivity GetMeAnswersSortEnum = "activity"
	GetMeAnswersSortEnumCreation GetMeAnswersSortEnum = "creation"
	GetMeAnswersSortEnumVotes    GetMeAnswersSortEnum = "votes"
)

type GetMeAnswersQueryParams struct {
	Callback *string                `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                 `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                `queryParam:"style=form,explode=true,name=max"`
	Min      *string                `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                 `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                 `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                 `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeAnswersRequest struct {
	QueryParams GetMeAnswersQueryParams
}

type GetMeAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
