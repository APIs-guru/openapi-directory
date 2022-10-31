package operations

type GetUsersIdsTagsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsTagsOrderEnum string

const (
	GetUsersIdsTagsOrderEnumDesc GetUsersIdsTagsOrderEnum = "desc"
	GetUsersIdsTagsOrderEnumAsc  GetUsersIdsTagsOrderEnum = "asc"
)

type GetUsersIdsTagsSortEnum string

const (
	GetUsersIdsTagsSortEnumPopular  GetUsersIdsTagsSortEnum = "popular"
	GetUsersIdsTagsSortEnumActivity GetUsersIdsTagsSortEnum = "activity"
	GetUsersIdsTagsSortEnumName     GetUsersIdsTagsSortEnum = "name"
)

type GetUsersIdsTagsQueryParams struct {
	Callback *string                   `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                   `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                    `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                   `queryParam:"style=form,explode=true,name=max"`
	Min      *string                   `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsTagsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                    `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                    `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                    `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsTagsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                    `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsTagsRequest struct {
	PathParams  GetUsersIdsTagsPathParams
	QueryParams GetUsersIdsTagsQueryParams
}

type GetUsersIdsTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
