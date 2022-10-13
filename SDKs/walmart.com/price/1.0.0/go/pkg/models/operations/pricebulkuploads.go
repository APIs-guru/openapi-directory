package operations

type PriceBulkUploadsFeedTypeEnum string

const (
	PriceBulkUploadsFeedTypeEnumPrice                PriceBulkUploadsFeedTypeEnum = "price"
	PriceBulkUploadsFeedTypeEnumCptSellerEligibility PriceBulkUploadsFeedTypeEnum = "CPT_SELLER_ELIGIBILITY"
)

type PriceBulkUploadsQueryParams struct {
	FeedType PriceBulkUploadsFeedTypeEnum `queryParam:"style=form,explode=true,name=feedType"`
}

type PriceBulkUploadsHeaders struct {
	Authorization         string  `header:"name=Authorization"`
	WmConsumerChannelType *string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string  `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string  `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string  `header:"name=WM_SVC.NAME"`
}

type PriceBulkUploadsRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PriceBulkUploadsRequestBody struct {
	File *PriceBulkUploadsRequestBodyFile `multipartForm:"file"`
}

type PriceBulkUploadsRequest struct {
	QueryParams PriceBulkUploadsQueryParams
	Headers     PriceBulkUploadsHeaders
	Request     PriceBulkUploadsRequestBody `request:"mediaType=multipart/form-data"`
}

type PriceBulkUploads200ApplicationJSON struct {
	AdditionalAttributes map[string]interface{} `json:"additionalAttributes"`
	Errors               map[string]interface{} `json:"errors"`
	FeedID               *string                `json:"feedId"`
}

type PriceBulkUploadsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	PriceBulkUploads200ApplicationJSONObject *PriceBulkUploads200ApplicationJSON
}
