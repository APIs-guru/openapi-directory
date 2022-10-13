package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentInitiationRecipientGetRequest struct {
	Request shared.PaymentInitiationRecipientGetRequest `request:"mediaType=application/json"`
}

type PaymentInitiationRecipientGetResponse struct {
	ContentType                           string
	PaymentInitiationRecipientGetResponse map[string]interface{}
	StatusCode                            int64
}
