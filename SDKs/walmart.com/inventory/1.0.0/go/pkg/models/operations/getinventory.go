package operations

type GetInventoryQueryParams struct {
	ShipNode *string `queryParam:"style=form,explode=true,name=shipNode"`
	Sku      string  `queryParam:"style=form,explode=true,name=sku"`
}

type GetInventoryHeaders struct {
	Authorization         string `header:"style=simple,explode=false,name=Authorization"`
	WmConsumerChannelType string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type GetInventoryRequest struct {
	QueryParams GetInventoryQueryParams
	Headers     GetInventoryHeaders
}

type GetInventory200ApplicationJSONQuantityUnitEnum string

const (
	GetInventory200ApplicationJSONQuantityUnitEnumEach GetInventory200ApplicationJSONQuantityUnitEnum = "EACH"
)

type GetInventory200ApplicationJSONQuantity struct {
	Amount float64                                        `json:"amount"`
	Unit   GetInventory200ApplicationJSONQuantityUnitEnum `json:"unit"`
}

type GetInventory200ApplicationJSON struct {
	Quantity GetInventory200ApplicationJSONQuantity `json:"quantity"`
	Sku      string                                 `json:"sku"`
}

type GetInventoryResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	GetInventory200ApplicationJSONObject *GetInventory200ApplicationJSON
}
