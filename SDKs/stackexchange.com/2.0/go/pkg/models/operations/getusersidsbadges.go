package operations

type GetUsersIdsBadgesPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsBadgesOrderEnum string

const (
	GetUsersIdsBadgesOrderEnumDesc GetUsersIdsBadgesOrderEnum = "desc"
	GetUsersIdsBadgesOrderEnumAsc  GetUsersIdsBadgesOrderEnum = "asc"
)

type GetUsersIdsBadgesSortEnum string

const (
	GetUsersIdsBadgesSortEnumRank    GetUsersIdsBadgesSortEnum = "rank"
	GetUsersIdsBadgesSortEnumName    GetUsersIdsBadgesSortEnum = "name"
	GetUsersIdsBadgesSortEnumType    GetUsersIdsBadgesSortEnum = "type"
	GetUsersIdsBadgesSortEnumAwarded GetUsersIdsBadgesSortEnum = "awarded"
)

type GetUsersIdsBadgesQueryParams struct {
	Callback *string                     `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                     `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                      `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                     `queryParam:"style=form,explode=true,name=max"`
	Min      *string                     `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsBadgesOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                      `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                      `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                      `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsBadgesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                      `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsBadgesRequest struct {
	PathParams  GetUsersIdsBadgesPathParams
	QueryParams GetUsersIdsBadgesQueryParams
}

type GetUsersIdsBadgesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
