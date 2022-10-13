package operations

import (
	"time"
)

type UpdatePriceHeaders struct {
	Authorization         string  `header:"name=Authorization"`
	WmConsumerChannelType *string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string  `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string  `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string  `header:"name=WM_SVC.NAME"`
}

type UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum string

const (
	UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumUsd UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum = "USD"
	UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumCad UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum = "CAD"
)

type UpdatePriceRequestBodyPricingComparisonPrice struct {
	Amount   *float64                                                  `json:"amount"`
	Currency *UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum `json:"currency"`
}

type UpdatePriceRequestBodyPricingComparisonPriceTypeEnum string

const (
	UpdatePriceRequestBodyPricingComparisonPriceTypeEnumBase UpdatePriceRequestBodyPricingComparisonPriceTypeEnum = "BASE"
)

type UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum string

const (
	UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnumUsd UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum = "USD"
	UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnumCad UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum = "CAD"
)

type UpdatePriceRequestBodyPricingCurrentPrice struct {
	Amount   *float64                                               `json:"amount"`
	Currency *UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum `json:"currency"`
}

type UpdatePriceRequestBodyPricingCurrentPriceTypeEnum string

const (
	UpdatePriceRequestBodyPricingCurrentPriceTypeEnumBase      UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = "BASE"
	UpdatePriceRequestBodyPricingCurrentPriceTypeEnumReduced   UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = "REDUCED"
	UpdatePriceRequestBodyPricingCurrentPriceTypeEnumClearance UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = "CLEARANCE"
)

type UpdatePriceRequestBodyPricingPriceDisplayCodesEnum string

const (
	UpdatePriceRequestBodyPricingPriceDisplayCodesEnumCart     UpdatePriceRequestBodyPricingPriceDisplayCodesEnum = "CART"
	UpdatePriceRequestBodyPricingPriceDisplayCodesEnumCheckout UpdatePriceRequestBodyPricingPriceDisplayCodesEnum = "CHECKOUT"
)

type UpdatePriceRequestBodyPricingProcessModeEnum string

const (
	UpdatePriceRequestBodyPricingProcessModeEnumUpsert UpdatePriceRequestBodyPricingProcessModeEnum = "UPSERT"
	UpdatePriceRequestBodyPricingProcessModeEnumDelete UpdatePriceRequestBodyPricingProcessModeEnum = "DELETE"
)

type UpdatePriceRequestBodyPricing struct {
	ComparisonPrice     *UpdatePriceRequestBodyPricingComparisonPrice         `json:"comparisonPrice"`
	ComparisonPriceType *UpdatePriceRequestBodyPricingComparisonPriceTypeEnum `json:"comparisonPriceType"`
	CurrentPrice        UpdatePriceRequestBodyPricingCurrentPrice             `json:"currentPrice"`
	CurrentPriceType    UpdatePriceRequestBodyPricingCurrentPriceTypeEnum     `json:"currentPriceType"`
	EffectiveDate       *time.Time                                            `json:"effectiveDate"`
	ExpirationDate      *time.Time                                            `json:"expirationDate"`
	PriceDisplayCodes   *UpdatePriceRequestBodyPricingPriceDisplayCodesEnum   `json:"priceDisplayCodes"`
	ProcessMode         *UpdatePriceRequestBodyPricingProcessModeEnum         `json:"processMode"`
	PromoID             *string                                               `json:"promoId"`
}

type UpdatePriceRequestBodyReplaceAllEnum string

const (
	UpdatePriceRequestBodyReplaceAllEnumTrue  UpdatePriceRequestBodyReplaceAllEnum = "true"
	UpdatePriceRequestBodyReplaceAllEnumFalse UpdatePriceRequestBodyReplaceAllEnum = "false"
)

type UpdatePriceRequestBody struct {
	Definitions map[string]interface{}                `json:"definitions"`
	OfferID     *string                               `json:"offerId"`
	Pricing     []UpdatePriceRequestBodyPricing       `json:"pricing"`
	ReplaceAll  *UpdatePriceRequestBodyReplaceAllEnum `json:"replaceAll"`
	Sku         string                                `json:"sku"`
}

type UpdatePriceRequest struct {
	Headers UpdatePriceHeaders
	Request UpdatePriceRequestBody `request:"mediaType=application/json"`
}

type UpdatePrice200ApplicationJSONErrorsCategoryEnum string

const (
	UpdatePrice200ApplicationJSONErrorsCategoryEnumApplication UpdatePrice200ApplicationJSONErrorsCategoryEnum = "APPLICATION"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumSystem      UpdatePrice200ApplicationJSONErrorsCategoryEnum = "SYSTEM"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumRequest     UpdatePrice200ApplicationJSONErrorsCategoryEnum = "REQUEST"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumData        UpdatePrice200ApplicationJSONErrorsCategoryEnum = "DATA"
)

type UpdatePrice200ApplicationJSONErrorsCauses struct {
	Code        *string `json:"code"`
	Description *string `json:"description"`
	Field       *string `json:"field"`
	Type        *string `json:"type"`
}

type UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum string

const (
	UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnumInternalDataError UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum = "INTERNAL_DATA_ERROR"
	UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnumExternalDataError UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum = "EXTERNAL_DATA_ERROR"
	UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnumSystemError       UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum = "SYSTEM_ERROR"
)

type UpdatePrice200ApplicationJSONErrorsSeverityEnum string

const (
	UpdatePrice200ApplicationJSONErrorsSeverityEnumInfo  UpdatePrice200ApplicationJSONErrorsSeverityEnum = "INFO"
	UpdatePrice200ApplicationJSONErrorsSeverityEnumWarn  UpdatePrice200ApplicationJSONErrorsSeverityEnum = "WARN"
	UpdatePrice200ApplicationJSONErrorsSeverityEnumError UpdatePrice200ApplicationJSONErrorsSeverityEnum = "ERROR"
)

type UpdatePrice200ApplicationJSONErrors struct {
	Category             *UpdatePrice200ApplicationJSONErrorsCategoryEnum             `json:"category"`
	Causes               []UpdatePrice200ApplicationJSONErrorsCauses                  `json:"causes"`
	Code                 string                                                       `json:"code"`
	Component            *string                                                      `json:"component"`
	Description          *string                                                      `json:"description"`
	ErrorIdentifiers     map[string]map[string]interface{}                            `json:"errorIdentifiers"`
	Field                *string                                                      `json:"field"`
	GatewayErrorCategory *UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum `json:"gatewayErrorCategory"`
	Info                 *string                                                      `json:"info"`
	ServiceName          *string                                                      `json:"serviceName"`
	Severity             *UpdatePrice200ApplicationJSONErrorsSeverityEnum             `json:"severity"`
	Type                 *string                                                      `json:"type"`
}

type UpdatePrice200ApplicationJSON struct {
	Errors     []UpdatePrice200ApplicationJSONErrors `json:"errors"`
	Mart       *string                               `json:"mart"`
	Message    *string                               `json:"message"`
	Sku        *string                               `json:"sku"`
	StatusCode *int32                                `json:"statusCode"`
}

type UpdatePriceResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	UpdatePrice200ApplicationJSONObject *UpdatePrice200ApplicationJSON
}
