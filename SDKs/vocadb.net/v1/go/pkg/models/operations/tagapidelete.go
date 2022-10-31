package operations

type TagAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type TagAPIDeleteQueryParams struct {
	HardDelete *bool   `queryParam:"style=form,explode=true,name=hardDelete"`
	Notes      *string `queryParam:"style=form,explode=true,name=notes"`
}

type TagAPIDeleteRequest struct {
	PathParams  TagAPIDeletePathParams
	QueryParams TagAPIDeleteQueryParams
}

type TagAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
