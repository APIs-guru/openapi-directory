package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupCategoryPathParams struct {
	GroupCategoryID string `pathParam:"style=simple,explode=false,name=groupCategoryId"`
}

type UpdateGroupCategory200ApplicationJSONActionEnum string

const (
	UpdateGroupCategory200ApplicationJSONActionEnumUpdateGroupCategory UpdateGroupCategory200ApplicationJSONActionEnum = "UpdateGroupCategory"
)

type UpdateGroupCategory200ApplicationJSONData struct {
	GroupCategories []shared.GroupCategory `json:"groupCategories"`
}

type UpdateGroupCategory200ApplicationJSONResultEnum string

const (
	UpdateGroupCategory200ApplicationJSONResultEnumSuccess UpdateGroupCategory200ApplicationJSONResultEnum = "success"
	UpdateGroupCategory200ApplicationJSONResultEnumError   UpdateGroupCategory200ApplicationJSONResultEnum = "error"
)

type UpdateGroupCategory200ApplicationJSON struct {
	Action UpdateGroupCategory200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateGroupCategory200ApplicationJSONData       `json:"data"`
	Result UpdateGroupCategory200ApplicationJSONResultEnum `json:"result"`
}

type UpdateGroupCategoryRequest struct {
	PathParams UpdateGroupCategoryPathParams
	Request    shared.GroupCategoryUpdate `request:"mediaType=application/json"`
}

type UpdateGroupCategoryResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	UpdateGroupCategory200ApplicationJSONObject *UpdateGroupCategory200ApplicationJSON
}
