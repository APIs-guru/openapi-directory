package operations

type LookupQueryParams struct {
	JSON   *string  `queryParam:"style=form,explode=true,name=json"`
	Number []string `queryParam:"style=form,explode=false,name=number"`
	Type   string   `queryParam:"style=form,explode=true,name=type"`
}

type LookupRequest struct {
	QueryParams LookupQueryParams
}

type LookupResponse struct {
	ContentType string
	StatusCode  int64
}
