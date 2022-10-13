package operations

type GetUsersIdsAnswersPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsAnswersOrderEnum string

const (
	GetUsersIdsAnswersOrderEnumDesc GetUsersIdsAnswersOrderEnum = "desc"
	GetUsersIdsAnswersOrderEnumAsc  GetUsersIdsAnswersOrderEnum = "asc"
)

type GetUsersIdsAnswersSortEnum string

const (
	GetUsersIdsAnswersSortEnumActivity GetUsersIdsAnswersSortEnum = "activity"
	GetUsersIdsAnswersSortEnumCreation GetUsersIdsAnswersSortEnum = "creation"
	GetUsersIdsAnswersSortEnumVotes    GetUsersIdsAnswersSortEnum = "votes"
)

type GetUsersIdsAnswersQueryParams struct {
	Callback *string                      `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                      `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                       `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                      `queryParam:"style=form,explode=true,name=max"`
	Min      *string                      `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                       `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                       `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                       `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                       `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsAnswersRequest struct {
	PathParams  GetUsersIdsAnswersPathParams
	QueryParams GetUsersIdsAnswersQueryParams
}

type GetUsersIdsAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
