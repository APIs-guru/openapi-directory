package operations

type PicoLoadmanagementSetDynamicCurrentPostPathParams struct {
	Serial int64 `pathParam:"style=simple,explode=false,name=serial"`
}

type PicoLoadmanagementSetDynamicCurrentPostQueryParams struct {
	Current int32 `queryParam:"style=form,explode=true,name=current"`
}

type PicoLoadmanagementSetDynamicCurrentPostRequest struct {
	PathParams  PicoLoadmanagementSetDynamicCurrentPostPathParams
	QueryParams PicoLoadmanagementSetDynamicCurrentPostQueryParams
}

type PicoLoadmanagementSetDynamicCurrentPostResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
