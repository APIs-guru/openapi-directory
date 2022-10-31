package operations

import (
	"openapi/pkg/models/shared"
)

type TemplatesCreatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type TemplatesCreateSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type TemplatesCreateRequest struct {
	PathParams TemplatesCreatePathParams
	Request    *shared.TemplateRequest `request:"mediaType=application/json"`
	Security   TemplatesCreateSecurity
}

type TemplatesCreateResponse struct {
	ContentType       string
	StatusCode        int64
	TemplatesResponse *shared.TemplatesResponse
}
