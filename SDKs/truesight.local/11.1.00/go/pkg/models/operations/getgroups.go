package operations

type GetGroupsDirectionEnum string

const (
	GetGroupsDirectionEnumAsc  GetGroupsDirectionEnum = "asc"
	GetGroupsDirectionEnumDesc GetGroupsDirectionEnum = "desc"
)

type GetGroupsQueryParams struct {
	Direction *GetGroupsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Limit     *int32                  `queryParam:"style=form,explode=true,name=limit"`
	Page      *string                 `queryParam:"style=form,explode=true,name=page"`
	Sort      *string                 `queryParam:"style=form,explode=true,name=sort"`
}

type GetGroupsRequest struct {
	QueryParams GetGroupsQueryParams
}

type GetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
