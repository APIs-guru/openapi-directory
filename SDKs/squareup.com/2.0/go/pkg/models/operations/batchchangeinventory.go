package operations

import (
	"openapi/pkg/models/shared"
)

type BatchChangeInventorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BatchChangeInventoryRequest struct {
	Request  shared.BatchChangeInventoryRequest `request:"mediaType=application/json"`
	Security BatchChangeInventorySecurity
}

type BatchChangeInventoryResponse struct {
	BatchChangeInventoryResponse *shared.BatchChangeInventoryResponse
	ContentType                  string
	StatusCode                   int64
}
