package operations

type GetMeOrderEnum string

const (
	GetMeOrderEnumDesc GetMeOrderEnum = "desc"
	GetMeOrderEnumAsc  GetMeOrderEnum = "asc"
)

type GetMeSortEnum string

const (
	GetMeSortEnumReputation GetMeSortEnum = "reputation"
	GetMeSortEnumCreation   GetMeSortEnum = "creation"
	GetMeSortEnumName       GetMeSortEnum = "name"
	GetMeSortEnumModified   GetMeSortEnum = "modified"
)

type GetMeQueryParams struct {
	Callback *string         `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string         `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64          `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string         `queryParam:"style=form,explode=true,name=max"`
	Min      *string         `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64          `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64          `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string          `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64          `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeRequest struct {
	QueryParams GetMeQueryParams
}

type GetMeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
