package operations

type GetUsersModeratorsOrderEnum string

const (
	GetUsersModeratorsOrderEnumDesc GetUsersModeratorsOrderEnum = "desc"
	GetUsersModeratorsOrderEnumAsc  GetUsersModeratorsOrderEnum = "asc"
)

type GetUsersModeratorsSortEnum string

const (
	GetUsersModeratorsSortEnumReputation GetUsersModeratorsSortEnum = "reputation"
	GetUsersModeratorsSortEnumCreation   GetUsersModeratorsSortEnum = "creation"
	GetUsersModeratorsSortEnumName       GetUsersModeratorsSortEnum = "name"
	GetUsersModeratorsSortEnumModified   GetUsersModeratorsSortEnum = "modified"
)

type GetUsersModeratorsQueryParams struct {
	Callback *string                      `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                      `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                       `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                      `queryParam:"style=form,explode=true,name=max"`
	Min      *string                      `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersModeratorsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                       `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                       `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                       `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersModeratorsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                       `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersModeratorsRequest struct {
	QueryParams GetUsersModeratorsQueryParams
}

type GetUsersModeratorsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
