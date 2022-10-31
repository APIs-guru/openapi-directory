package operations

type DeleteAPIV1UserSubscriptionsQueryParams struct {
	Email *string `queryParam:"style=form,explode=true,name=email"`
}

type DeleteAPIV1UserSubscriptionsRequest struct {
	QueryParams DeleteAPIV1UserSubscriptionsQueryParams
}

type DeleteAPIV1UserSubscriptionsResponse struct {
	ContentType string
	StatusCode  int64
}
