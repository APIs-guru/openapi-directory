package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsUpdateKeyCredentialsPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsUpdateKeyCredentialsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsUpdateKeyCredentialsRequests struct {
	KeyCredentialsUpdateParameters  *shared.KeyCredentialsUpdateParameters `request:"mediaType=application/json"`
	KeyCredentialsUpdateParameters1 *shared.KeyCredentialsUpdateParameters `request:"mediaType=text/json"`
}

type ApplicationsUpdateKeyCredentialsRequest struct {
	PathParams  ApplicationsUpdateKeyCredentialsPathParams
	QueryParams ApplicationsUpdateKeyCredentialsQueryParams
	Request     ApplicationsUpdateKeyCredentialsRequests
}

type ApplicationsUpdateKeyCredentialsResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
