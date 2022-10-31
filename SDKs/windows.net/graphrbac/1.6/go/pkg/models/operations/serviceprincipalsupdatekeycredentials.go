package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsUpdateKeyCredentialsPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsUpdateKeyCredentialsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsUpdateKeyCredentialsRequests struct {
	KeyCredentialsUpdateParameters  *shared.KeyCredentialsUpdateParameters `request:"mediaType=application/json"`
	KeyCredentialsUpdateParameters1 *shared.KeyCredentialsUpdateParameters `request:"mediaType=text/json"`
}

type ServicePrincipalsUpdateKeyCredentialsRequest struct {
	PathParams  ServicePrincipalsUpdateKeyCredentialsPathParams
	QueryParams ServicePrincipalsUpdateKeyCredentialsQueryParams
	Request     ServicePrincipalsUpdateKeyCredentialsRequests
}

type ServicePrincipalsUpdateKeyCredentialsResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
