package operations

type GetUsersIDTagsTagsTopAnswersPathParams struct {
	ID   int64  `pathParam:"style=simple,explode=false,name=id"`
	Tags string `pathParam:"style=simple,explode=false,name=tags"`
}

type GetUsersIDTagsTagsTopAnswersOrderEnum string

const (
	GetUsersIDTagsTagsTopAnswersOrderEnumDesc GetUsersIDTagsTagsTopAnswersOrderEnum = "desc"
	GetUsersIDTagsTagsTopAnswersOrderEnumAsc  GetUsersIDTagsTagsTopAnswersOrderEnum = "asc"
)

type GetUsersIDTagsTagsTopAnswersSortEnum string

const (
	GetUsersIDTagsTagsTopAnswersSortEnumActivity GetUsersIDTagsTagsTopAnswersSortEnum = "activity"
	GetUsersIDTagsTagsTopAnswersSortEnumCreation GetUsersIDTagsTagsTopAnswersSortEnum = "creation"
	GetUsersIDTagsTagsTopAnswersSortEnumVotes    GetUsersIDTagsTagsTopAnswersSortEnum = "votes"
)

type GetUsersIDTagsTagsTopAnswersQueryParams struct {
	Callback *string                                `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                                `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                                 `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                                `queryParam:"style=form,explode=true,name=max"`
	Min      *string                                `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIDTagsTagsTopAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                                 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                                 `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                                 `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIDTagsTagsTopAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                                 `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIDTagsTagsTopAnswersRequest struct {
	PathParams  GetUsersIDTagsTagsTopAnswersPathParams
	QueryParams GetUsersIDTagsTagsTopAnswersQueryParams
}

type GetUsersIDTagsTagsTopAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
