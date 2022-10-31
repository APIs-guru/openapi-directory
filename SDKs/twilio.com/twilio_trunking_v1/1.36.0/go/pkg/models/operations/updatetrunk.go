package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTrunkServers = []string{
	"https://trunking.twilio.com",
}

type UpdateTrunkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum string

const (
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumHead   UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "HEAD"
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumGet    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "GET"
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumPost   UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "POST"
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumPatch  UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "PATCH"
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumPut    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "PUT"
	UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnumDelete UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = "DELETE"
)

type UpdateTrunkUpdateTrunkRequest struct {
	CnamLookupEnabled      *bool                                                    `form:"name=CnamLookupEnabled"`
	DisasterRecoveryMethod *UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum `form:"name=DisasterRecoveryMethod"`
	DisasterRecoveryURL    *string                                                  `form:"name=DisasterRecoveryUrl"`
	DomainName             *string                                                  `form:"name=DomainName"`
	FriendlyName           *string                                                  `form:"name=FriendlyName"`
	Secure                 *bool                                                    `form:"name=Secure"`
	TransferCallerID       *shared.TrunkEnumTransferCallerIDEnum                    `form:"name=TransferCallerId"`
	TransferMode           *shared.TrunkEnumTransferSettingEnum                     `form:"name=TransferMode"`
}

type UpdateTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTrunkRequest struct {
	ServerURL  *string
	PathParams UpdateTrunkPathParams
	Request    *UpdateTrunkUpdateTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTrunkSecurity
}

type UpdateTrunkResponse struct {
	ContentType     string
	StatusCode      int64
	TrunkingV1Trunk *shared.TrunkingV1Trunk
}
