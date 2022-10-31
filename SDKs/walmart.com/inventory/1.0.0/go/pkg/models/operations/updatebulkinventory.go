package operations

type UpdateBulkInventoryQueryParams struct {
	FeedType string  `queryParam:"style=form,explode=true,name=feedType"`
	ShipNode *string `queryParam:"style=form,explode=true,name=shipNode"`
}

type UpdateBulkInventoryHeaders struct {
	Authorization         string `header:"style=simple,explode=false,name=Authorization"`
	WmConsumerChannelType string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type UpdateBulkInventoryRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UpdateBulkInventoryRequestBody struct {
	File *UpdateBulkInventoryRequestBodyFile `multipartForm:"file"`
}

type UpdateBulkInventoryRequest struct {
	QueryParams UpdateBulkInventoryQueryParams
	Headers     UpdateBulkInventoryHeaders
	Request     UpdateBulkInventoryRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateBulkInventory200ApplicationJSON struct {
	AdditionalAttributes map[string]interface{} `json:"additionalAttributes,omitempty"`
	Errors               map[string]interface{} `json:"errors,omitempty"`
	FeedID               *string                `json:"feedId,omitempty"`
}

type UpdateBulkInventoryResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	UpdateBulkInventory200ApplicationJSONObject *UpdateBulkInventory200ApplicationJSON
}
