package operations

import (
	"openapi/pkg/models/shared"
)

type JoinGroupsRequestBody struct {
	GroupIds string `multipartForm:"name=group_ids"`
}

type JoinGroupsRequest struct {
	Request JoinGroupsRequestBody `request:"mediaType=multipart/form-data"`
}

type JoinGroups200ApplicationJSON struct {
	Groups         []shared.Group `json:"groups"`
	OverGroupLimit *bool          `json:"over_group_limit"`
}

type JoinGroupsResponse struct {
	ContentType                        string
	StatusCode                         int64
	JoinGroups200ApplicationJSONObject *JoinGroups200ApplicationJSON
}
