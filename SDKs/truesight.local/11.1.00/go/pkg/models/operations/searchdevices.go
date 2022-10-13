package operations

type SearchDevicesQueryParams struct {
	ApplicationID *string `queryParam:"style=form,explode=true,name=applicationId"`
	GroupID       *string `queryParam:"style=form,explode=true,name=groupId"`
	Limit         *int32  `queryParam:"style=form,explode=true,name=limit"`
	Page          *string `queryParam:"style=form,explode=true,name=page"`
	SearchTerms   string  `queryParam:"style=form,explode=true,name=searchTerms"`
	ServiceID     *string `queryParam:"style=form,explode=true,name=serviceId"`
}

type SearchDevicesRequest struct {
	QueryParams SearchDevicesQueryParams
}

type SearchDevicesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
