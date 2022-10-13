package operations

type ResourcesAPIGetListPathParams struct {
	CultureCode string `pathParam:"style=simple,explode=false,name=cultureCode"`
}

type ResourcesAPIGetListQueryParams struct {
	SetNames []string `queryParam:"style=form,explode=true,name=setNames"`
}

type ResourcesAPIGetListRequest struct {
	PathParams  ResourcesAPIGetListPathParams
	QueryParams ResourcesAPIGetListQueryParams
}

type ResourcesAPIGetListResponse struct {
	ContentType                                 string
	ResourcesAPIGetList200ApplicationJSONObject map[string]map[string]string
	ResourcesAPIGetList200TextJSONObject        map[string]map[string]string
	StatusCode                                  int64
}
