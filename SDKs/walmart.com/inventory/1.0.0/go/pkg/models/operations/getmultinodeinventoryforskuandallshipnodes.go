package operations

type GetMultiNodeInventoryForSkuAndAllShipnodesPathParams struct {
	Sku string `pathParam:"style=simple,explode=false,name=sku"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams struct {
	ShipNode *string `queryParam:"style=form,explode=true,name=shipNode"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesHeaders struct {
	Authorization         string `header:"style=simple,explode=false,name=Authorization"`
	WmConsumerChannelType string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesRequest struct {
	PathParams  GetMultiNodeInventoryForSkuAndAllShipnodesPathParams
	QueryParams GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams
	Headers     GetMultiNodeInventoryForSkuAndAllShipnodesHeaders
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum string

const (
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnumEach GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum = "EACH"
)

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty struct {
	Amount float64                                                                                 `json:"amount"`
	Unit   GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum `json:"unit"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum string

const (
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnumApplication GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum = "APPLICATION"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnumSystem      GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum = "SYSTEM"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnumRequest     GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum = "REQUEST"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnumData        GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum = "DATA"
)

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Field       *string `json:"field,omitempty"`
	Type        *string `json:"type,omitempty"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum string

const (
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumInfo  GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "INFO"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumWarn  GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "WARN"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumError GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "ERROR"
)

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors struct {
	Category         *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum `json:"category,omitempty"`
	Causes           []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses      `json:"causes,omitempty"`
	Code             string                                                                               `json:"code"`
	Description      *string                                                                              `json:"description,omitempty"`
	ErrorIdentifiers map[string]map[string]interface{}                                                    `json:"errorIdentifiers,omitempty"`
	Field            *string                                                                              `json:"field,omitempty"`
	Info             *string                                                                              `json:"info,omitempty"`
	Severity         *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum `json:"severity,omitempty"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum string

const (
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnumEach GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum = "EACH"
)

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty struct {
	Amount float64                                                                           `json:"amount"`
	Unit   GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum `json:"unit"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes struct {
	AvailToSellQty *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty `json:"availToSellQty,omitempty"`
	Errors         []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors        `json:"errors,omitempty"`
	InputQty       *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty       `json:"inputQty,omitempty"`
	ShipNode       *string                                                                          `json:"shipNode,omitempty"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON struct {
	Nodes []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes `json:"nodes,omitempty"`
	Sku   *string                                                             `json:"sku,omitempty"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON
}
