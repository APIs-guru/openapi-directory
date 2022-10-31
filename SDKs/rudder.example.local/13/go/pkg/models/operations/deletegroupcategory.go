package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupCategoryPathParams struct {
	GroupCategoryID string `pathParam:"style=simple,explode=false,name=groupCategoryId"`
}

type DeleteGroupCategoryRequest struct {
	PathParams DeleteGroupCategoryPathParams
}

type DeleteGroupCategory200ApplicationJSONActionEnum string

const (
	DeleteGroupCategory200ApplicationJSONActionEnumDeleteGroupCategory DeleteGroupCategory200ApplicationJSONActionEnum = "DeleteGroupCategory"
)

type DeleteGroupCategory200ApplicationJSONData struct {
	GroupCategories []shared.GroupCategory `json:"groupCategories"`
}

type DeleteGroupCategory200ApplicationJSONResultEnum string

const (
	DeleteGroupCategory200ApplicationJSONResultEnumSuccess DeleteGroupCategory200ApplicationJSONResultEnum = "success"
	DeleteGroupCategory200ApplicationJSONResultEnumError   DeleteGroupCategory200ApplicationJSONResultEnum = "error"
)

type DeleteGroupCategory200ApplicationJSON struct {
	Action DeleteGroupCategory200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteGroupCategory200ApplicationJSONData       `json:"data"`
	Result DeleteGroupCategory200ApplicationJSONResultEnum `json:"result"`
}

type DeleteGroupCategoryResponse struct {
	ContentType                                 string
	DeleteGroupCategory200ApplicationJSONObject *DeleteGroupCategory200ApplicationJSON
	StatusCode                                  int64
}
