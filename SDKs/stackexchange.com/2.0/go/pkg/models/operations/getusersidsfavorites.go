package operations

type GetUsersIdsFavoritesPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsFavoritesOrderEnum string

const (
	GetUsersIdsFavoritesOrderEnumDesc GetUsersIdsFavoritesOrderEnum = "desc"
	GetUsersIdsFavoritesOrderEnumAsc  GetUsersIdsFavoritesOrderEnum = "asc"
)

type GetUsersIdsFavoritesSortEnum string

const (
	GetUsersIdsFavoritesSortEnumActivity GetUsersIdsFavoritesSortEnum = "activity"
	GetUsersIdsFavoritesSortEnumCreation GetUsersIdsFavoritesSortEnum = "creation"
	GetUsersIdsFavoritesSortEnumVotes    GetUsersIdsFavoritesSortEnum = "votes"
	GetUsersIdsFavoritesSortEnumAdded    GetUsersIdsFavoritesSortEnum = "added"
)

type GetUsersIdsFavoritesQueryParams struct {
	Callback *string                        `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                        `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                         `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                        `queryParam:"style=form,explode=true,name=max"`
	Min      *string                        `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsFavoritesOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                         `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                         `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                         `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsFavoritesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                         `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsFavoritesRequest struct {
	PathParams  GetUsersIdsFavoritesPathParams
	QueryParams GetUsersIdsFavoritesQueryParams
}

type GetUsersIdsFavoritesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
