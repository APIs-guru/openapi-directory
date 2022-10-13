package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomerGroupSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCustomerGroupRequest struct {
	Request  shared.CreateCustomerGroupRequest `request:"mediaType=application/json"`
	Security CreateCustomerGroupSecurity
}

type CreateCustomerGroupResponse struct {
	ContentType                 string
	CreateCustomerGroupResponse *shared.CreateCustomerGroupResponse
	StatusCode                  int64
}
