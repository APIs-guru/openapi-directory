package operations

type UpdateMultiNodeInventoryPathParams struct {
	Sku string `pathParam:"style=simple,explode=false,name=sku"`
}

type UpdateMultiNodeInventoryHeaders struct {
	Authorization         string `header:"name=Authorization"`
	WmConsumerChannelType string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"name=WM_SVC.NAME"`
}

type UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum string

const (
	UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnumEach UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum = "EACH"
)

type UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty struct {
	Amount float64                                                             `json:"amount"`
	Unit   UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum `json:"unit"`
}

type UpdateMultiNodeInventoryRequestBodyInventoriesNodes struct {
	InputQty UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty `json:"inputQty"`
	ShipNode string                                                      `json:"shipNode"`
}

type UpdateMultiNodeInventoryRequestBodyInventories struct {
	Nodes []UpdateMultiNodeInventoryRequestBodyInventoriesNodes `json:"nodes"`
}

type UpdateMultiNodeInventoryRequestBody struct {
	Inventories UpdateMultiNodeInventoryRequestBodyInventories `json:"inventories"`
}

type UpdateMultiNodeInventoryRequest struct {
	PathParams UpdateMultiNodeInventoryPathParams
	Headers    UpdateMultiNodeInventoryHeaders
	Request    UpdateMultiNodeInventoryRequestBody `request:"mediaType=application/json"`
}

type UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum string

const (
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnumApplication UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum = "APPLICATION"
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnumSystem      UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum = "SYSTEM"
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnumRequest     UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum = "REQUEST"
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnumData        UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum = "DATA"
)

type UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Field       *string `json:"field,omitempty"`
	Type        *string `json:"type,omitempty"`
}

type UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum string

const (
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnumInfo  UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum = "INFO"
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnumWarn  UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum = "WARN"
	UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnumError UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum = "ERROR"
)

type UpdateMultiNodeInventory200ApplicationJSONNodesErrors struct {
	Category         *UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum `json:"category,omitempty"`
	Causes           []UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses      `json:"causes,omitempty"`
	Code             string                                                             `json:"code"`
	Description      *string                                                            `json:"description,omitempty"`
	ErrorIdentifiers map[string]map[string]interface{}                                  `json:"errorIdentifiers,omitempty"`
	Field            *string                                                            `json:"field,omitempty"`
	Info             *string                                                            `json:"info,omitempty"`
	Severity         *UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum `json:"severity,omitempty"`
}

type UpdateMultiNodeInventory200ApplicationJSONNodes struct {
	Errors   []UpdateMultiNodeInventory200ApplicationJSONNodesErrors `json:"errors,omitempty"`
	ShipNode *string                                                 `json:"shipNode,omitempty"`
	Status   *string                                                 `json:"status,omitempty"`
}

type UpdateMultiNodeInventory200ApplicationJSON struct {
	Nodes []UpdateMultiNodeInventory200ApplicationJSONNodes `json:"nodes,omitempty"`
	Sku   *string                                           `json:"sku,omitempty"`
}

type UpdateMultiNodeInventoryResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	UpdateMultiNodeInventory200ApplicationJSONObject *UpdateMultiNodeInventory200ApplicationJSON
}
