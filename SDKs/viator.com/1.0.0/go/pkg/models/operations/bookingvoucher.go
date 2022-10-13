package operations

type BookingVoucherQueryParams struct {
	EmbeddedResources *bool   `queryParam:"style=form,explode=true,name=embeddedResources"`
	FullHTML          *bool   `queryParam:"style=form,explode=true,name=fullHTML"`
	ItemID            *int64  `queryParam:"style=form,explode=true,name=itemId"`
	LeadLastName      *string `queryParam:"style=form,explode=true,name=leadLastName"`
	MobileVoucher     *bool   `queryParam:"style=form,explode=true,name=mobileVoucher"`
	VoucherKey        *string `queryParam:"style=form,explode=true,name=voucherKey"`
}

type BookingVoucherHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingVoucherRequest struct {
	QueryParams BookingVoucherQueryParams
	Headers     BookingVoucherHeaders
}

type BookingVoucher200ApplicationJSON struct {
	Data             *string                `json:"data"`
	DateStamp        *string                `json:"dateStamp"`
	ErrorCodes       []string               `json:"errorCodes"`
	ErrorMessage     []interface{}          `json:"errorMessage"`
	ErrorMessageText *string                `json:"errorMessageText"`
	ErrorName        *string                `json:"errorName"`
	ErrorReference   *string                `json:"errorReference"`
	ErrorType        *string                `json:"errorType"`
	ExtraInfo        map[string]interface{} `json:"extraInfo"`
	ExtraObject      map[string]interface{} `json:"extraObject"`
	Success          *bool                  `json:"success"`
	TotalCount       *int64                 `json:"totalCount"`
	Vmid             *string                `json:"vmid"`
}

type BookingVoucherResponse struct {
	ContentType                            string
	StatusCode                             int64
	BookingVoucher200ApplicationJSONObject *BookingVoucher200ApplicationJSON
}
