package operations

type DeleteMaintenanceIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteMaintenanceIDRequest struct {
	PathParams DeleteMaintenanceIDPathParams
}

type DeleteMaintenanceIDResponse struct {
	ContentType string
	StatusCode  int64
}
