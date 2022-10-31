package operations

type StatusScanPagePathParams struct {
	ScanID int64 `pathParam:"style=simple,explode=false,name=scanId"`
}

type StatusScanPageRequest struct {
	PathParams StatusScanPagePathParams
}

type StatusScanPageResponse struct {
	APIResponse *interface{}
	ContentType string
	StatusCode  int64
}
