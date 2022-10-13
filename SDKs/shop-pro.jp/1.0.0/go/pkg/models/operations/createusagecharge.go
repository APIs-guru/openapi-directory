package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUsageChargePathParams struct {
	RecurringApplicationChargeID string `pathParam:"style=simple,explode=false,name=recurringApplicationChargeId"`
}

type CreateUsageChargeHeaders struct {
	XAppstoreUsageChargeToken *string `header:"name=X-Appstore-Usage-Charge-Token"`
}

type CreateUsageChargeRequestBodyUsageCharge struct {
	Description string `json:"description"`
	Point       int64  `json:"point"`
}

type CreateUsageChargeRequestBody struct {
	UsageCharge *CreateUsageChargeRequestBodyUsageCharge `json:"usage_charge"`
}

type CreateUsageChargeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateUsageChargeRequest struct {
	PathParams CreateUsageChargePathParams
	Headers    CreateUsageChargeHeaders
	Request    CreateUsageChargeRequestBody `request:"mediaType=application/json"`
	Security   CreateUsageChargeSecurity
}

type CreateUsageCharge201ApplicationJSONUsageCharge struct {
	Description *string `json:"description"`
	ID          *string `json:"id"`
	MakeDate    *int64  `json:"make_date"`
	Point       *int64  `json:"point"`
	UpdateDate  *int64  `json:"update_date"`
}

type CreateUsageCharge201ApplicationJSON struct {
	UsageCharge *CreateUsageCharge201ApplicationJSONUsageCharge `json:"usage_charge"`
}

type CreateUsageChargeResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreateUsageCharge201ApplicationJSONObject *CreateUsageCharge201ApplicationJSON
}
