package operations

type GetWfsInventoryQueryParams struct {
	FromModifiedDate *string `queryParam:"style=form,explode=true,name=fromModifiedDate"`
	Limit            *string `queryParam:"style=form,explode=true,name=limit"`
	Offset           *string `queryParam:"style=form,explode=true,name=offset"`
	Sku              *string `queryParam:"style=form,explode=true,name=sku"`
	ToModifiedDate   *string `queryParam:"style=form,explode=true,name=toModifiedDate"`
}

type GetWfsInventoryHeaders struct {
	Authorization         string `header:"name=Authorization"`
	WmConsumerChannelType string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"name=WM_SVC.NAME"`
}

type GetWfsInventoryRequest struct {
	QueryParams GetWfsInventoryQueryParams
	Headers     GetWfsInventoryHeaders
}

type GetWfsInventory200ApplicationJSONHeaders struct {
	Limit      *int32 `json:"limit"`
	Offset     *int32 `json:"offset"`
	TotalCount *int32 `json:"totalCount"`
}

type GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes struct {
	AvailToSellQty *int32  `json:"availToSellQty"`
	ModifiedDate   *string `json:"modifiedDate"`
	OnHandQty      *int32  `json:"onHandQty"`
	ShipNodeType   *string `json:"shipNodeType"`
}

type GetWfsInventory200ApplicationJSONPayloadInventory struct {
	ShipNodes []GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes `json:"shipNodes"`
	Sku       *string                                                      `json:"sku"`
}

type GetWfsInventory200ApplicationJSONPayload struct {
	Inventory []GetWfsInventory200ApplicationJSONPayloadInventory `json:"inventory"`
}

type GetWfsInventory200ApplicationJSON struct {
	Headers *GetWfsInventory200ApplicationJSONHeaders `json:"headers"`
	Payload *GetWfsInventory200ApplicationJSONPayload `json:"payload"`
}

type GetWfsInventoryResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetWfsInventory200ApplicationJSONObject *GetWfsInventory200ApplicationJSON
}
