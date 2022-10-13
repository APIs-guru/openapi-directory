package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveInventoryTransferPathParams struct {
	TransferID string `pathParam:"style=simple,explode=false,name=transfer_id"`
}

type RetrieveInventoryTransferSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveInventoryTransferRequest struct {
	PathParams RetrieveInventoryTransferPathParams
	Security   RetrieveInventoryTransferSecurity
}

type RetrieveInventoryTransferResponse struct {
	ContentType                       string
	RetrieveInventoryTransferResponse *shared.RetrieveInventoryTransferResponse
	StatusCode                        int64
}
