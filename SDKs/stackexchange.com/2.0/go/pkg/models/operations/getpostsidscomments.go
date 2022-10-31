package operations

type GetPostsIdsCommentsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetPostsIdsCommentsOrderEnum string

const (
	GetPostsIdsCommentsOrderEnumDesc GetPostsIdsCommentsOrderEnum = "desc"
	GetPostsIdsCommentsOrderEnumAsc  GetPostsIdsCommentsOrderEnum = "asc"
)

type GetPostsIdsCommentsSortEnum string

const (
	GetPostsIdsCommentsSortEnumCreation GetPostsIdsCommentsSortEnum = "creation"
	GetPostsIdsCommentsSortEnumVotes    GetPostsIdsCommentsSortEnum = "votes"
)

type GetPostsIdsCommentsQueryParams struct {
	Callback *string                       `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                       `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                        `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                       `queryParam:"style=form,explode=true,name=max"`
	Min      *string                       `queryParam:"style=form,explode=true,name=min"`
	Order    *GetPostsIdsCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                        `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                        `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                        `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetPostsIdsCommentsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                        `queryParam:"style=form,explode=true,name=todate"`
}

type GetPostsIdsCommentsRequest struct {
	PathParams  GetPostsIdsCommentsPathParams
	QueryParams GetPostsIdsCommentsQueryParams
}

type GetPostsIdsCommentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
