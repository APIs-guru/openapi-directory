package operations

type GetMeTagsTagsTopAnswersPathParams struct {
	Tags string `pathParam:"style=simple,explode=false,name=tags"`
}

type GetMeTagsTagsTopAnswersOrderEnum string

const (
	GetMeTagsTagsTopAnswersOrderEnumDesc GetMeTagsTagsTopAnswersOrderEnum = "desc"
	GetMeTagsTagsTopAnswersOrderEnumAsc  GetMeTagsTagsTopAnswersOrderEnum = "asc"
)

type GetMeTagsTagsTopAnswersSortEnum string

const (
	GetMeTagsTagsTopAnswersSortEnumActivity GetMeTagsTagsTopAnswersSortEnum = "activity"
	GetMeTagsTagsTopAnswersSortEnumCreation GetMeTagsTagsTopAnswersSortEnum = "creation"
	GetMeTagsTagsTopAnswersSortEnumVotes    GetMeTagsTagsTopAnswersSortEnum = "votes"
)

type GetMeTagsTagsTopAnswersQueryParams struct {
	Callback *string                           `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                           `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                            `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                           `queryParam:"style=form,explode=true,name=max"`
	Min      *string                           `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeTagsTagsTopAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                            `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                            `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                            `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeTagsTagsTopAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                            `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeTagsTagsTopAnswersRequest struct {
	PathParams  GetMeTagsTagsTopAnswersPathParams
	QueryParams GetMeTagsTagsTopAnswersQueryParams
}

type GetMeTagsTagsTopAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
