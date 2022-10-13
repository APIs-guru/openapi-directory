package operations

type DeleteGeofencesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteGeofencesIDRequest struct {
	PathParams DeleteGeofencesIDPathParams
}

type DeleteGeofencesIDResponse struct {
	ContentType string
	StatusCode  int64
}
