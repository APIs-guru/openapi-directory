package operations

type GetUsersModeratorsElectedOrderEnum string

const (
	GetUsersModeratorsElectedOrderEnumDesc GetUsersModeratorsElectedOrderEnum = "desc"
	GetUsersModeratorsElectedOrderEnumAsc  GetUsersModeratorsElectedOrderEnum = "asc"
)

type GetUsersModeratorsElectedSortEnum string

const (
	GetUsersModeratorsElectedSortEnumReputation GetUsersModeratorsElectedSortEnum = "reputation"
	GetUsersModeratorsElectedSortEnumCreation   GetUsersModeratorsElectedSortEnum = "creation"
	GetUsersModeratorsElectedSortEnumName       GetUsersModeratorsElectedSortEnum = "name"
	GetUsersModeratorsElectedSortEnumModified   GetUsersModeratorsElectedSortEnum = "modified"
)

type GetUsersModeratorsElectedQueryParams struct {
	Callback *string                             `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                             `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                              `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                             `queryParam:"style=form,explode=true,name=max"`
	Min      *string                             `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersModeratorsElectedOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                              `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                              `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                              `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersModeratorsElectedSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                              `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersModeratorsElectedRequest struct {
	QueryParams GetUsersModeratorsElectedQueryParams
}

type GetUsersModeratorsElectedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
