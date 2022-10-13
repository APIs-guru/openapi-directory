package operations

type GetApplicationsDirectionEnum string

const (
	GetApplicationsDirectionEnumAsc  GetApplicationsDirectionEnum = "asc"
	GetApplicationsDirectionEnumDesc GetApplicationsDirectionEnum = "desc"
)

type GetApplicationsQueryParams struct {
	Direction *GetApplicationsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Limit     *int32                        `queryParam:"style=form,explode=true,name=limit"`
	Page      *string                       `queryParam:"style=form,explode=true,name=page"`
	Sort      *string                       `queryParam:"style=form,explode=true,name=sort"`
}

type GetApplicationsRequest struct {
	QueryParams GetApplicationsQueryParams
}

type GetApplicationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
