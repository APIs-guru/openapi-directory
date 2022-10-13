package operations

type GetSearchOrderEnum string

const (
	GetSearchOrderEnumDesc GetSearchOrderEnum = "desc"
	GetSearchOrderEnumAsc  GetSearchOrderEnum = "asc"
)

type GetSearchSortEnum string

const (
	GetSearchSortEnumActivity  GetSearchSortEnum = "activity"
	GetSearchSortEnumCreation  GetSearchSortEnum = "creation"
	GetSearchSortEnumVotes     GetSearchSortEnum = "votes"
	GetSearchSortEnumRelevance GetSearchSortEnum = "relevance"
)

type GetSearchQueryParams struct {
	Callback  *string             `queryParam:"style=form,explode=true,name=callback"`
	Filter    *string             `queryParam:"style=form,explode=true,name=filter"`
	Fromdate  *int64              `queryParam:"style=form,explode=true,name=fromdate"`
	Intitle   *string             `queryParam:"style=form,explode=true,name=intitle"`
	Max       *string             `queryParam:"style=form,explode=true,name=max"`
	Min       *string             `queryParam:"style=form,explode=true,name=min"`
	Nottagged *string             `queryParam:"style=form,explode=true,name=nottagged"`
	Order     *GetSearchOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page      *int64              `queryParam:"style=form,explode=true,name=page"`
	Pagesize  *int64              `queryParam:"style=form,explode=true,name=pagesize"`
	Site      string              `queryParam:"style=form,explode=true,name=site"`
	Sort      *GetSearchSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Tagged    *string             `queryParam:"style=form,explode=true,name=tagged"`
	Todate    *int64              `queryParam:"style=form,explode=true,name=todate"`
}

type GetSearchRequest struct {
	QueryParams GetSearchQueryParams
}

type GetSearchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
