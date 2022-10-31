package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomerCardPathParams struct {
	CardID     string `pathParam:"style=simple,explode=false,name=card_id"`
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type DeleteCustomerCardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteCustomerCardRequest struct {
	PathParams DeleteCustomerCardPathParams
	Security   DeleteCustomerCardSecurity
}

type DeleteCustomerCardResponse struct {
	ContentType                string
	DeleteCustomerCardResponse *shared.DeleteCustomerCardResponse
	StatusCode                 int64
}
