package operations

type GetMultiNodeInventoryForSkuAndAllShipnodesPathParams struct {
	Sku string `pathParam:"style=simple,explode=false,name=sku"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams struct {
	ShipNode *string `queryParam:"style=form,explode=true,name=shipNode"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesHeaders struct {
	Authorization         string `header:"name=Authorization"`
	WmConsumerChannelType string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"name=WM_SVC.NAME"`
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
	Code        *string `json:"code"`
	Description *string `json:"description"`
	Field       *string `json:"field"`
	Type        *string `json:"type"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum string

const (
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumInfo  GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "INFO"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumWarn  GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "WARN"
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnumError GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum = "ERROR"
)

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors struct {
	Category         *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum `json:"category"`
	Causes           []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses      `json:"causes"`
	Code             string                                                                               `json:"code"`
	Description      *string                                                                              `json:"description"`
	ErrorIdentifiers map[string]map[string]interface{}                                                    `json:"errorIdentifiers"`
	Field            *string                                                                              `json:"field"`
	Info             *string                                                                              `json:"info"`
	Severity         *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum `json:"severity"`
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
	AvailToSellQty *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty `json:"availToSellQty"`
	Errors         []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors        `json:"errors"`
	InputQty       *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty       `json:"inputQty"`
	ShipNode       *string                                                                          `json:"shipNode"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON struct {
	Nodes []GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes `json:"nodes"`
	Sku   *string                                                             `json:"sku"`
}

type GetMultiNodeInventoryForSkuAndAllShipnodesResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject *GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON
}
