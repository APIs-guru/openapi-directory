package operations

import (
	"openapi/pkg/models/shared"
)

type ListGiftCardsQueryParams struct {
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	CustomerID *string `queryParam:"style=form,explode=true,name=customer_id"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	State      *string `queryParam:"style=form,explode=true,name=state"`
	Type       *string `queryParam:"style=form,explode=true,name=type"`
}

type ListGiftCardsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListGiftCardsRequest struct {
	QueryParams ListGiftCardsQueryParams
	Security    ListGiftCardsSecurity
}

type ListGiftCardsResponse struct {
	ContentType           string
	ListGiftCardsResponse *shared.ListGiftCardsResponse
	StatusCode            int64
}
