package operations

type GetPostsIdsSuggestedEditsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetPostsIdsSuggestedEditsOrderEnum string

const (
	GetPostsIdsSuggestedEditsOrderEnumDesc GetPostsIdsSuggestedEditsOrderEnum = "desc"
	GetPostsIdsSuggestedEditsOrderEnumAsc  GetPostsIdsSuggestedEditsOrderEnum = "asc"
)

type GetPostsIdsSuggestedEditsSortEnum string

const (
	GetPostsIdsSuggestedEditsSortEnumCreation  GetPostsIdsSuggestedEditsSortEnum = "creation"
	GetPostsIdsSuggestedEditsSortEnumApproval  GetPostsIdsSuggestedEditsSortEnum = "approval"
	GetPostsIdsSuggestedEditsSortEnumRejection GetPostsIdsSuggestedEditsSortEnum = "rejection"
)

type GetPostsIdsSuggestedEditsQueryParams struct {
	Callback *string                             `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                             `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                              `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                             `queryParam:"style=form,explode=true,name=max"`
	Min      *string                             `queryParam:"style=form,explode=true,name=min"`
	Order    *GetPostsIdsSuggestedEditsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                              `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                              `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                              `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetPostsIdsSuggestedEditsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                              `queryParam:"style=form,explode=true,name=todate"`
}

type GetPostsIdsSuggestedEditsRequest struct {
	PathParams  GetPostsIdsSuggestedEditsPathParams
	QueryParams GetPostsIdsSuggestedEditsQueryParams
}

type GetPostsIdsSuggestedEditsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
