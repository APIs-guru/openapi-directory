package operations

type StopScanPagePathParams struct {
	ScanID int64 `pathParam:"style=simple,explode=false,name=scanId"`
}

type StopScanPageRequest struct {
	PathParams StopScanPagePathParams
}

type StopScanPageResponse struct {
	APIResponse *interface{}
	ContentType string
	StatusCode  int64
}
