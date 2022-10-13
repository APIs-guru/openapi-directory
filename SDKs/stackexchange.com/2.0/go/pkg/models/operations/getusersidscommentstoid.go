package operations

type GetUsersIdsCommentsToidPathParams struct {
	Ids  string `pathParam:"style=simple,explode=false,name=ids"`
	Toid int64  `pathParam:"style=simple,explode=false,name=toid"`
}

type GetUsersIdsCommentsToidOrderEnum string

const (
	GetUsersIdsCommentsToidOrderEnumDesc GetUsersIdsCommentsToidOrderEnum = "desc"
	GetUsersIdsCommentsToidOrderEnumAsc  GetUsersIdsCommentsToidOrderEnum = "asc"
)

type GetUsersIdsCommentsToidSortEnum string

const (
	GetUsersIdsCommentsToidSortEnumCreation GetUsersIdsCommentsToidSortEnum = "creation"
	GetUsersIdsCommentsToidSortEnumVotes    GetUsersIdsCommentsToidSortEnum = "votes"
)

type GetUsersIdsCommentsToidQueryParams struct {
	Callback *string                           `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                           `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                            `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                           `queryParam:"style=form,explode=true,name=max"`
	Min      *string                           `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsCommentsToidOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                            `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                            `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                            `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsCommentsToidSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                            `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsCommentsToidRequest struct {
	PathParams  GetUsersIdsCommentsToidPathParams
	QueryParams GetUsersIdsCommentsToidQueryParams
}

type GetUsersIdsCommentsToidResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
