package operations

type ReleaseEventAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type ReleaseEventAPIDeleteQueryParams struct {
	HardDelete *bool   `queryParam:"style=form,explode=true,name=hardDelete"`
	Notes      *string `queryParam:"style=form,explode=true,name=notes"`
}

type ReleaseEventAPIDeleteRequest struct {
	PathParams  ReleaseEventAPIDeletePathParams
	QueryParams ReleaseEventAPIDeleteQueryParams
}

type ReleaseEventAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
