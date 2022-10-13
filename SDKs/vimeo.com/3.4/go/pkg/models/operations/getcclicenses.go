package operations

import (
	"openapi/pkg/models/shared"
)

type GetCcLicensesResponse struct {
	ContentType     string
	StatusCode      int64
	CreativeCommons []shared.CreativeCommons
}
