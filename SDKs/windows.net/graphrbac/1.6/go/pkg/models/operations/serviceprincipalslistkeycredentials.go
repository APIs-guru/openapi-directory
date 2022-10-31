package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsListKeyCredentialsPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsListKeyCredentialsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsListKeyCredentialsRequest struct {
	PathParams  ServicePrincipalsListKeyCredentialsPathParams
	QueryParams ServicePrincipalsListKeyCredentialsQueryParams
}

type ServicePrincipalsListKeyCredentialsResponse struct {
	ContentType             string
	GraphError              *shared.GraphError
	KeyCredentialListResult *shared.KeyCredentialListResult
	StatusCode              int64
}
