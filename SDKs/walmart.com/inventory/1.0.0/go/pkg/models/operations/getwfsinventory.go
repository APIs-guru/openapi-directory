package operations

type GetWfsInventoryQueryParams struct {
	FromModifiedDate *string `queryParam:"style=form,explode=true,name=fromModifiedDate"`
	Limit            *string `queryParam:"style=form,explode=true,name=limit"`
	Offset           *string `queryParam:"style=form,explode=true,name=offset"`
	Sku              *string `queryParam:"style=form,explode=true,name=sku"`
	ToModifiedDate   *string `queryParam:"style=form,explode=true,name=toModifiedDate"`
}

type GetWfsInventoryHeaders struct {
	Authorization         string `header:"style=simple,explode=false,name=Authorization"`
	WmConsumerChannelType string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type GetWfsInventoryRequest struct {
	QueryParams GetWfsInventoryQueryParams
	Headers     GetWfsInventoryHeaders
}

type GetWfsInventory200ApplicationJSONHeaders struct {
	Limit      *int32 `json:"limit,omitempty"`
	Offset     *int32 `json:"offset,omitempty"`
	TotalCount *int32 `json:"totalCount,omitempty"`
}

type GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes struct {
	AvailToSellQty *int32  `json:"availToSellQty,omitempty"`
	ModifiedDate   *string `json:"modifiedDate,omitempty"`
	OnHandQty      *int32  `json:"onHandQty,omitempty"`
	ShipNodeType   *string `json:"shipNodeType,omitempty"`
}

type GetWfsInventory200ApplicationJSONPayloadInventory struct {
	ShipNodes []GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes `json:"shipNodes,omitempty"`
	Sku       *string                                                      `json:"sku,omitempty"`
}

type GetWfsInventory200ApplicationJSONPayload struct {
	Inventory []GetWfsInventory200ApplicationJSONPayloadInventory `json:"inventory,omitempty"`
}

type GetWfsInventory200ApplicationJSON struct {
	Headers *GetWfsInventory200ApplicationJSONHeaders `json:"headers,omitempty"`
	Payload *GetWfsInventory200ApplicationJSONPayload `json:"payload,omitempty"`
}

type GetWfsInventoryResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetWfsInventory200ApplicationJSONObject *GetWfsInventory200ApplicationJSON
}
