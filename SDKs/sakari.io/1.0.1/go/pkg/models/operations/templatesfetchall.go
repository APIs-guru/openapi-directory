package operations

import (
	"openapi/pkg/models/shared"
)

type TemplatesFetchAllPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type TemplatesFetchAllQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type TemplatesFetchAllSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type TemplatesFetchAllRequest struct {
	PathParams  TemplatesFetchAllPathParams
	QueryParams TemplatesFetchAllQueryParams
	Security    TemplatesFetchAllSecurity
}

type TemplatesFetchAllResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	StatusCode        int64
	TemplatesResponse *shared.TemplatesResponse
}
