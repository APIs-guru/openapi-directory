package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupRequestBody struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
}

type CreateGroupSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateGroupRequest struct {
	Request  CreateGroupRequestBody `request:"mediaType=application/vnd.vimeo.group+json"`
	Security CreateGroupSecurity
}

type CreateGroupResponse struct {
	ContentType string
	StatusCode  int64
	Group       *shared.Group
	LegacyError *shared.LegacyError
}
