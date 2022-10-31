package operations

import (
	"openapi/pkg/models/shared"
)

type PostApplicationChargeRequestBodyApplicationCharge struct {
	ApplicationChargeSourceID *string `json:"application_charge_source_id,omitempty"`
}

type PostApplicationChargeRequestBody struct {
	ApplicationCharge *PostApplicationChargeRequestBodyApplicationCharge `json:"application_charge,omitempty"`
}

type PostApplicationChargeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostApplicationChargeRequest struct {
	Request  PostApplicationChargeRequestBody `request:"mediaType=application/json"`
	Security PostApplicationChargeSecurity
}

type PostApplicationCharge201ApplicationJSONApplicationCharge struct {
	ID         *string `json:"id,omitempty"`
	MakeDate   *int64  `json:"make_date,omitempty"`
	Point      *int64  `json:"point,omitempty"`
	UpdateDate *int64  `json:"update_date,omitempty"`
}

type PostApplicationCharge201ApplicationJSON struct {
	ApplicationCharge *PostApplicationCharge201ApplicationJSONApplicationCharge `json:"application_charge,omitempty"`
}

type PostApplicationChargeResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PostApplicationCharge201ApplicationJSONObject *PostApplicationCharge201ApplicationJSON
}
