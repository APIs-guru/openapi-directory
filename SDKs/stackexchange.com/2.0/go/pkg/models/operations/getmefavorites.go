package operations

type GetMeFavoritesOrderEnum string

const (
	GetMeFavoritesOrderEnumDesc GetMeFavoritesOrderEnum = "desc"
	GetMeFavoritesOrderEnumAsc  GetMeFavoritesOrderEnum = "asc"
)

type GetMeFavoritesSortEnum string

const (
	GetMeFavoritesSortEnumActivity GetMeFavoritesSortEnum = "activity"
	GetMeFavoritesSortEnumCreation GetMeFavoritesSortEnum = "creation"
	GetMeFavoritesSortEnumVotes    GetMeFavoritesSortEnum = "votes"
	GetMeFavoritesSortEnumAdded    GetMeFavoritesSortEnum = "added"
)

type GetMeFavoritesQueryParams struct {
	Callback *string                  `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                  `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                   `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                  `queryParam:"style=form,explode=true,name=max"`
	Min      *string                  `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeFavoritesOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                   `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                   `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                   `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeFavoritesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                   `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeFavoritesRequest struct {
	QueryParams GetMeFavoritesQueryParams
}

type GetMeFavoritesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
