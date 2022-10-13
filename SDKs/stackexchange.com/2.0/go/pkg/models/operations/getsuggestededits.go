package operations

type GetSuggestedEditsOrderEnum string

const (
	GetSuggestedEditsOrderEnumDesc GetSuggestedEditsOrderEnum = "desc"
	GetSuggestedEditsOrderEnumAsc  GetSuggestedEditsOrderEnum = "asc"
)

type GetSuggestedEditsSortEnum string

const (
	GetSuggestedEditsSortEnumCreation  GetSuggestedEditsSortEnum = "creation"
	GetSuggestedEditsSortEnumApproval  GetSuggestedEditsSortEnum = "approval"
	GetSuggestedEditsSortEnumRejection GetSuggestedEditsSortEnum = "rejection"
)

type GetSuggestedEditsQueryParams struct {
	Callback *string                     `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                     `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                      `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                     `queryParam:"style=form,explode=true,name=max"`
	Min      *string                     `queryParam:"style=form,explode=true,name=min"`
	Order    *GetSuggestedEditsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                      `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                      `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                      `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetSuggestedEditsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                      `queryParam:"style=form,explode=true,name=todate"`
}

type GetSuggestedEditsRequest struct {
	QueryParams GetSuggestedEditsQueryParams
}

type GetSuggestedEditsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
