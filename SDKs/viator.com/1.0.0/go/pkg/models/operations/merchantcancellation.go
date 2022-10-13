package operations

type MerchantCancellationHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type MerchantCancellationRequestBodyCancelItems struct {
	CancelCode         *string `json:"cancelCode"`
	CancelDescription  *string `json:"cancelDescription"`
	DistributorItemRef *string `json:"distributorItemRef"`
	ItemID             *int64  `json:"itemId"`
}

type MerchantCancellationRequestBody struct {
	CancelItems    []MerchantCancellationRequestBodyCancelItems `json:"cancelItems"`
	DistributorRef *string                                      `json:"distributorRef"`
	ItineraryID    *int64                                       `json:"itineraryId"`
}

type MerchantCancellationRequest struct {
	Headers MerchantCancellationHeaders
	Request *MerchantCancellationRequestBody `request:"mediaType=application/json"`
}

type MerchantCancellation200ApplicationJSONDataCancelItems struct {
	CancellationResponseDescription *string `json:"cancellationResponseDescription"`
	CancellationResponseStatusCode  *string `json:"cancellationResponseStatusCode"`
	DistributorItemRef              *string `json:"distributorItemRef"`
	ItemID                          *string `json:"itemId"`
}

type MerchantCancellation200ApplicationJSONData struct {
	CancelItems    []MerchantCancellation200ApplicationJSONDataCancelItems `json:"cancelItems"`
	DistributorRef *string                                                 `json:"distributorRef"`
	ItineraryID    *int64                                                  `json:"itineraryId"`
}

type MerchantCancellation200ApplicationJSON struct {
	Data             *MerchantCancellation200ApplicationJSONData `json:"data"`
	DateStamp        *string                                     `json:"dateStamp"`
	ErrorCodes       []string                                    `json:"errorCodes"`
	ErrorMessage     []interface{}                               `json:"errorMessage"`
	ErrorMessageText *string                                     `json:"errorMessageText"`
	ErrorName        *string                                     `json:"errorName"`
	ErrorReference   *string                                     `json:"errorReference"`
	ErrorType        *string                                     `json:"errorType"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo"`
	ExtraObject      map[string]interface{}                      `json:"extraObject"`
	Success          *bool                                       `json:"success"`
	TotalCount       *int64                                      `json:"totalCount"`
	Vmid             *string                                     `json:"vmid"`
}

type MerchantCancellation400ApplicationJSONData struct {
	CancellationResponseDescription *string `json:"cancellationResponseDescription"`
	CancellationResponseStatusCode  *string `json:"cancellationResponseStatusCode"`
	DistributorItemRef              *string `json:"distributorItemRef"`
	ItemID                          *string `json:"itemId"`
}

type MerchantCancellation400ApplicationJSON struct {
	Data             *MerchantCancellation400ApplicationJSONData `json:"data"`
	DateStamp        *string                                     `json:"dateStamp"`
	ErrorCodes       []string                                    `json:"errorCodes"`
	ErrorMessage     []interface{}                               `json:"errorMessage"`
	ErrorMessageText *string                                     `json:"errorMessageText"`
	ErrorName        *string                                     `json:"errorName"`
	ErrorReference   *string                                     `json:"errorReference"`
	ErrorType        *string                                     `json:"errorType"`
	ExtraInfo        map[string]interface{}                      `json:"extraInfo"`
	ExtraObject      map[string]interface{}                      `json:"extraObject"`
	Success          *bool                                       `json:"success"`
	TotalCount       *int64                                      `json:"totalCount"`
	Vmid             *string                                     `json:"vmid"`
}

type MerchantCancellationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	MerchantCancellation200ApplicationJSONObject *MerchantCancellation200ApplicationJSON
	MerchantCancellation400ApplicationJSONObject *MerchantCancellation400ApplicationJSON
}
