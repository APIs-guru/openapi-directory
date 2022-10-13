package operations

type GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams struct {
	Limit      *string `queryParam:"style=form,explode=true,name=limit"`
	NextCursor *string `queryParam:"style=form,explode=true,name=nextCursor"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders struct {
	Authorization         string `header:"name=Authorization"`
	WmConsumerChannelType string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"name=WM_SVC.NAME"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest struct {
	QueryParams GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams
	Headers     GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum string

const (
	GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnumEach GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum = "EACH"
)

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty struct {
	Amount float64                                                                                                       `json:"amount"`
	Unit   GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum `json:"unit"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum string

const (
	GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnumEach GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum = "EACH"
)

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty struct {
	Amount float64                                                                                                 `json:"amount"`
	Unit   GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum `json:"unit"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes struct {
	AvailToSellQty *GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty `json:"availToSellQty"`
	InputQty       *GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty       `json:"inputQty"`
	ShipNode       *string                                                                                                `json:"shipNode"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories struct {
	Nodes []GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes `json:"nodes"`
	Sku   *string                                                                                   `json:"sku"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements struct {
	Inventories []GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories `json:"inventories"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta struct {
	NextCursor *string  `json:"nextCursor"`
	TotalCount *float64 `json:"totalCount"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON struct {
	Elements *GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements `json:"elements"`
	Meta     *GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta     `json:"meta"`
}

type GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONObject *GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON
}
