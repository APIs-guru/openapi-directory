package operations

type RootV1StatisticsConsolidatedQueryParams struct {
	AppID       *string `queryParam:"style=form,explode=true,name=AppId"`
	CompanyID   *string `queryParam:"style=form,explode=true,name=CompanyId"`
	DeviceToken *string `queryParam:"style=form,explode=true,name=DeviceToken"`
	EndDate     *string `queryParam:"style=form,explode=true,name=EndDate"`
	InstanceID  *string `queryParam:"style=form,explode=true,name=InstanceId"`
	StartDate   *string `queryParam:"style=form,explode=true,name=StartDate"`
	Tag         *string `queryParam:"style=form,explode=true,name=Tag"`
}

type RootV1StatisticsConsolidatedRequest struct {
	QueryParams RootV1StatisticsConsolidatedQueryParams
}

type RootV1StatisticsConsolidatedResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
