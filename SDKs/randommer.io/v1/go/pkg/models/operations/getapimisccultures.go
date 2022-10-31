package operations

type GetAPIMiscCulturesHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
}

type GetAPIMiscCulturesRequest struct {
	Headers GetAPIMiscCulturesHeaders
}

type GetAPIMiscCulturesResponse struct {
	ContentType string
	StatusCode  int64
}
