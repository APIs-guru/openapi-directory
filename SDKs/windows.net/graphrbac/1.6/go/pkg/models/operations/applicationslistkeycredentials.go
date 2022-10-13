package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsListKeyCredentialsPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsListKeyCredentialsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsListKeyCredentialsRequest struct {
	PathParams  ApplicationsListKeyCredentialsPathParams
	QueryParams ApplicationsListKeyCredentialsQueryParams
}

type ApplicationsListKeyCredentialsResponse struct {
	ContentType             string
	GraphError              *shared.GraphError
	KeyCredentialListResult *shared.KeyCredentialListResult
	StatusCode              int64
}
