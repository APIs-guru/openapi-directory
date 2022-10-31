package operations

type DeleteWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteWebhooksIDRequest struct {
	PathParams DeleteWebhooksIDPathParams
}

type DeleteWebhooksIDResponse struct {
	ContentType string
	StatusCode  int64
}
