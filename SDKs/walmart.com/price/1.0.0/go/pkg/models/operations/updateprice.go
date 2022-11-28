package operations

import (
	"time"
)

type UpdatePriceHeaders struct {
	Authorization         string  `header:"style=simple,explode=false,name=Authorization"`
	WmConsumerChannelType *string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string  `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string  `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string  `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum string

const (
	UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumUsd UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum = "USD"
	UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumCad UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum = "CAD"
)

// UpdatePriceRequestBodyPricingComparisonPrice
// This is applicable only for promotions
type UpdatePriceRequestBodyPricingComparisonPrice struct {
	Amount   *float64                                                  `json:"amount,omitempty"`
	Currency *UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum `json:"currency,omitempty"`
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
	Amount   *float64                                               `json:"amount,omitempty"`
	Currency *UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum `json:"currency,omitempty"`
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
	ComparisonPrice     *UpdatePriceRequestBodyPricingComparisonPrice         `json:"comparisonPrice,omitempty"`
	ComparisonPriceType *UpdatePriceRequestBodyPricingComparisonPriceTypeEnum `json:"comparisonPriceType,omitempty"`
	CurrentPrice        UpdatePriceRequestBodyPricingCurrentPrice             `json:"currentPrice"`
	CurrentPriceType    UpdatePriceRequestBodyPricingCurrentPriceTypeEnum     `json:"currentPriceType"`
	EffectiveDate       *time.Time                                            `json:"effectiveDate,omitempty"`
	ExpirationDate      *time.Time                                            `json:"expirationDate,omitempty"`
	PriceDisplayCodes   *UpdatePriceRequestBodyPricingPriceDisplayCodesEnum   `json:"priceDisplayCodes,omitempty"`
	ProcessMode         *UpdatePriceRequestBodyPricingProcessModeEnum         `json:"processMode,omitempty"`
	PromoID             *string                                               `json:"promoId,omitempty"`
}

type UpdatePriceRequestBodyReplaceAllEnum string

const (
	UpdatePriceRequestBodyReplaceAllEnumTrue  UpdatePriceRequestBodyReplaceAllEnum = "true"
	UpdatePriceRequestBodyReplaceAllEnumFalse UpdatePriceRequestBodyReplaceAllEnum = "false"
)

type UpdatePriceRequestBody struct {
	Definitions map[string]interface{}                `json:"definitions,omitempty"`
	OfferID     *string                               `json:"offerId,omitempty"`
	Pricing     []UpdatePriceRequestBodyPricing       `json:"pricing"`
	ReplaceAll  *UpdatePriceRequestBodyReplaceAllEnum `json:"replaceAll,omitempty"`
	Sku         string                                `json:"sku"`
}

type UpdatePrice200ApplicationJSONErrorsCategoryEnum string

const (
	UpdatePrice200ApplicationJSONErrorsCategoryEnumApplication UpdatePrice200ApplicationJSONErrorsCategoryEnum = "APPLICATION"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumSystem      UpdatePrice200ApplicationJSONErrorsCategoryEnum = "SYSTEM"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumRequest     UpdatePrice200ApplicationJSONErrorsCategoryEnum = "REQUEST"
	UpdatePrice200ApplicationJSONErrorsCategoryEnumData        UpdatePrice200ApplicationJSONErrorsCategoryEnum = "DATA"
)

type UpdatePrice200ApplicationJSONErrorsCauses struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Field       *string `json:"field,omitempty"`
	Type        *string `json:"type,omitempty"`
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
	Category             *UpdatePrice200ApplicationJSONErrorsCategoryEnum             `json:"category,omitempty"`
	Causes               []UpdatePrice200ApplicationJSONErrorsCauses                  `json:"causes,omitempty"`
	Code                 string                                                       `json:"code"`
	Component            *string                                                      `json:"component,omitempty"`
	Description          *string                                                      `json:"description,omitempty"`
	ErrorIdentifiers     map[string]map[string]interface{}                            `json:"errorIdentifiers,omitempty"`
	Field                *string                                                      `json:"field,omitempty"`
	GatewayErrorCategory *UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum `json:"gatewayErrorCategory,omitempty"`
	Info                 *string                                                      `json:"info,omitempty"`
	ServiceName          *string                                                      `json:"serviceName,omitempty"`
	Severity             *UpdatePrice200ApplicationJSONErrorsSeverityEnum             `json:"severity,omitempty"`
	Type                 *string                                                      `json:"type,omitempty"`
}

type UpdatePrice200ApplicationJSON struct {
	Errors     []UpdatePrice200ApplicationJSONErrors `json:"errors,omitempty"`
	Mart       *string                               `json:"mart,omitempty"`
	Message    *string                               `json:"message,omitempty"`
	Sku        *string                               `json:"sku,omitempty"`
	StatusCode *int32                                `json:"statusCode,omitempty"`
}

type UpdatePriceRequest struct {
	Headers UpdatePriceHeaders
	Request UpdatePriceRequestBody `request:"mediaType=application/json"`
}

type UpdatePriceResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	UpdatePrice200ApplicationJSONObject *UpdatePrice200ApplicationJSON
}
