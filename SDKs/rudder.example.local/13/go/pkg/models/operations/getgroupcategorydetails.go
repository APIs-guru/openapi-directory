package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupCategoryDetailsPathParams struct {
	GroupCategoryID string `pathParam:"style=simple,explode=false,name=groupCategoryId"`
}

type GetGroupCategoryDetailsRequest struct {
	PathParams GetGroupCategoryDetailsPathParams
}

type GetGroupCategoryDetails200ApplicationJSONActionEnum string

const (
	GetGroupCategoryDetails200ApplicationJSONActionEnumGetGroupCategoryDetails GetGroupCategoryDetails200ApplicationJSONActionEnum = "GetGroupCategoryDetails"
)

type GetGroupCategoryDetails200ApplicationJSONData struct {
	GroupCategories []shared.GroupCategory `json:"groupCategories"`
}

type GetGroupCategoryDetails200ApplicationJSONResultEnum string

const (
	GetGroupCategoryDetails200ApplicationJSONResultEnumSuccess GetGroupCategoryDetails200ApplicationJSONResultEnum = "success"
	GetGroupCategoryDetails200ApplicationJSONResultEnumError   GetGroupCategoryDetails200ApplicationJSONResultEnum = "error"
)

type GetGroupCategoryDetails200ApplicationJSON struct {
	Action GetGroupCategoryDetails200ApplicationJSONActionEnum `json:"action"`
	Data   GetGroupCategoryDetails200ApplicationJSONData       `json:"data"`
	Result GetGroupCategoryDetails200ApplicationJSONResultEnum `json:"result"`
}

type GetGroupCategoryDetailsResponse struct {
	ContentType                                     string
	GetGroupCategoryDetails200ApplicationJSONObject *GetGroupCategoryDetails200ApplicationJSON
	StatusCode                                      int64
}
