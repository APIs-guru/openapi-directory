package operations

type DeleteWebhooksQueryParams struct {
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
}

type DeleteWebhooksRequest struct {
	QueryParams DeleteWebhooksQueryParams
}

type DeleteWebhooksResponse struct {
	ContentType string
	StatusCode  int64
}
