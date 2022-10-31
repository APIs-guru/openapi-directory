package operations

type VenueAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type VenueAPIDeleteQueryParams struct {
	HardDelete *bool   `queryParam:"style=form,explode=true,name=hardDelete"`
	Notes      *string `queryParam:"style=form,explode=true,name=notes"`
}

type VenueAPIDeleteRequest struct {
	PathParams  VenueAPIDeletePathParams
	QueryParams VenueAPIDeleteQueryParams
}

type VenueAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
