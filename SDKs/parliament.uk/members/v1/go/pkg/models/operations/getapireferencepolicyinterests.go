package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIReferencePolicyInterestsResponse struct {
	Body                 []byte
	ContentType          string
	GenericReferenceData []shared.GenericReferenceData
	StatusCode           int64
}
