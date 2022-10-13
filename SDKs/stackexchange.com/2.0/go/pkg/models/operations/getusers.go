package operations

type GetUsersOrderEnum string

const (
	GetUsersOrderEnumDesc GetUsersOrderEnum = "desc"
	GetUsersOrderEnumAsc  GetUsersOrderEnum = "asc"
)

type GetUsersSortEnum string

const (
	GetUsersSortEnumReputation GetUsersSortEnum = "reputation"
	GetUsersSortEnumCreation   GetUsersSortEnum = "creation"
	GetUsersSortEnumName       GetUsersSortEnum = "name"
	GetUsersSortEnumModified   GetUsersSortEnum = "modified"
)

type GetUsersQueryParams struct {
	Callback *string            `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string            `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64             `queryParam:"style=form,explode=true,name=fromdate"`
	Inname   *string            `queryParam:"style=form,explode=true,name=inname"`
	Max      *string            `queryParam:"style=form,explode=true,name=max"`
	Min      *string            `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64             `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64             `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string             `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64             `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
