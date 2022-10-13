package operations

import (
	"openapi/pkg/models/shared"
)

type VoidTransactionPathParams struct {
	LocationID    string `pathParam:"style=simple,explode=false,name=location_id"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
}

type VoidTransactionSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type VoidTransactionRequest struct {
	PathParams VoidTransactionPathParams
	Security   VoidTransactionSecurity
}

type VoidTransactionResponse struct {
	ContentType             string
	StatusCode              int64
	VoidTransactionResponse *shared.VoidTransactionResponse
}
