package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsUpdatePasswordCredentialsPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsUpdatePasswordCredentialsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsUpdatePasswordCredentialsRequests struct {
	PasswordCredentialsUpdateParameters  *shared.PasswordCredentialsUpdateParameters `request:"mediaType=application/json"`
	PasswordCredentialsUpdateParameters1 *shared.PasswordCredentialsUpdateParameters `request:"mediaType=text/json"`
}

type ApplicationsUpdatePasswordCredentialsRequest struct {
	PathParams  ApplicationsUpdatePasswordCredentialsPathParams
	QueryParams ApplicationsUpdatePasswordCredentialsQueryParams
	Request     ApplicationsUpdatePasswordCredentialsRequests
}

type ApplicationsUpdatePasswordCredentialsResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
