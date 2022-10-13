package operations

type GetWebhooksRegistrationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetWebhooksRegistrationsIDRequest struct {
	PathParams GetWebhooksRegistrationsIDPathParams
}

type GetWebhooksRegistrationsIDResponse struct {
	ContentType string
	StatusCode  int64
}
