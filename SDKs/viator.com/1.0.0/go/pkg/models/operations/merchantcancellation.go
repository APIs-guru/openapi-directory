package operations

type MerchantCancellationHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type MerchantCancellationRequestBodyCancelItems struct {
	CancelCode         *string `json:"cancelCode,omitempty"`
	CancelDescription  *string `json:"cancelDescription,omitempty"`
	DistributorItemRef *string `json:"distributorItemRef,omitempty"`
	ItemID             *int64  `json:"itemId,omitempty"`
}

type MerchantCancellationRequestBody struct {
	CancelItems    []MerchantCancellationRequestBodyCancelItems `json:"cancelItems,omitempty"`
	DistributorRef *string                                      `json:"distributorRef,omitempty"`
	ItineraryID    *int64                                       `json:"itineraryId,omitempty"`
}

type MerchantCancellationRequest struct {
	Headers MerchantCancellationHeaders
	Request *MerchantCancellationRequestBody `request:"mediaType=application/json"`
}

type MerchantCancellation200ApplicationJSONDataCancelItems struct {
	CancellationResponseDescription *string `json:"cancellationResponseDescription,omitempty"`
	CancellationResponseStatusCode  *string `json:"cancellationResponseStatusCode,omitempty"`
	DistributorItemRef              *string `json:"distributorItemRef,omitempty"`
	ItemID                          *string `json:"itemId,omitempty"`
}

type MerchantCancellation200ApplicationJSONData struct {
	CancelItems    []MerchantCancellation200ApplicationJSONDataCancelItems `json:"cancelItems,omitempty"`
	DistributorRef *string                                                 `json:"distributorRef,omitempty"`
	ItineraryID    *int64                                                  `json:"itineraryId,omitempty"`
}

type MerchantCancellation200ApplicationJSON struct {
	Data             *MerchantCancellation200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                     `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                    `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                               `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                     `json:"errorMessageText,omitempty"`
	ErrorName        *string                                     `json:"errorName,omitempty"`
	ErrorReference   *string                                     `json:"errorReference,omitempty"`
	ErrorType        *string                                     `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                      `json:"extraObject,omitempty"`
	Success          *bool                                       `json:"success,omitempty"`
	TotalCount       *int64                                      `json:"totalCount,omitempty"`
	Vmid             *string                                     `json:"vmid,omitempty"`
}

type MerchantCancellation400ApplicationJSONData struct {
	CancellationResponseDescription *string `json:"cancellationResponseDescription,omitempty"`
	CancellationResponseStatusCode  *string `json:"cancellationResponseStatusCode,omitempty"`
	DistributorItemRef              *string `json:"distributorItemRef,omitempty"`
	ItemID                          *string `json:"itemId,omitempty"`
}

type MerchantCancellation400ApplicationJSON struct {
	Data             *MerchantCancellation400ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                     `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                    `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                               `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                     `json:"errorMessageText,omitempty"`
	ErrorName        *string                                     `json:"errorName,omitempty"`
	ErrorReference   *string                                     `json:"errorReference,omitempty"`
	ErrorType        *string                                     `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                      `json:"extraObject,omitempty"`
	Success          *bool                                       `json:"success,omitempty"`
	TotalCount       *int64                                      `json:"totalCount,omitempty"`
	Vmid             *string                                     `json:"vmid,omitempty"`
}

type MerchantCancellationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	MerchantCancellation200ApplicationJSONObject *MerchantCancellation200ApplicationJSON
	MerchantCancellation400ApplicationJSONObject *MerchantCancellation400ApplicationJSON
}
