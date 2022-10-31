package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomerGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type DeleteCustomerGroupSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteCustomerGroupRequest struct {
	PathParams DeleteCustomerGroupPathParams
	Security   DeleteCustomerGroupSecurity
}

type DeleteCustomerGroupResponse struct {
	ContentType                 string
	DeleteCustomerGroupResponse *shared.DeleteCustomerGroupResponse
	StatusCode                  int64
}
