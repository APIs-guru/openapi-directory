package operations

type GetUsersIdsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsOrderEnum string

const (
	GetUsersIdsOrderEnumDesc GetUsersIdsOrderEnum = "desc"
	GetUsersIdsOrderEnumAsc  GetUsersIdsOrderEnum = "asc"
)

type GetUsersIdsSortEnum string

const (
	GetUsersIdsSortEnumReputation GetUsersIdsSortEnum = "reputation"
	GetUsersIdsSortEnumCreation   GetUsersIdsSortEnum = "creation"
	GetUsersIdsSortEnumName       GetUsersIdsSortEnum = "name"
	GetUsersIdsSortEnumModified   GetUsersIdsSortEnum = "modified"
)

type GetUsersIdsQueryParams struct {
	Callback *string               `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string               `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string               `queryParam:"style=form,explode=true,name=max"`
	Min      *string               `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsRequest struct {
	PathParams  GetUsersIdsPathParams
	QueryParams GetUsersIdsQueryParams
}

type GetUsersIdsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
