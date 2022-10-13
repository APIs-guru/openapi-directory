package operations

type DeleteDriversIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDriversIDRequest struct {
	PathParams DeleteDriversIDPathParams
}

type DeleteDriversIDResponse struct {
	ContentType string
	StatusCode  int64
}
