package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountLicenseSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountLicenseRequest struct {
	Security GetAccountLicenseSecurity
}

type GetAccountLicenseResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
