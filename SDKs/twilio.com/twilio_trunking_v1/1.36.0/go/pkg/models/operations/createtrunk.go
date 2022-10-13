package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrunkServers = []string{
	"https://trunking.twilio.com",
}

type CreateTrunkRequestBodyDisasterRecoveryMethodEnum string

const (
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumHead   CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "HEAD"
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumGet    CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "GET"
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumPost   CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "POST"
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumPatch  CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "PATCH"
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumPut    CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "PUT"
	CreateTrunkRequestBodyDisasterRecoveryMethodEnumDelete CreateTrunkRequestBodyDisasterRecoveryMethodEnum = "DELETE"
)

type CreateTrunkRequestBodyCreateTrunkRequest struct {
	CnamLookupEnabled      *bool                                             `form:"name=CnamLookupEnabled"`
	DisasterRecoveryMethod *CreateTrunkRequestBodyDisasterRecoveryMethodEnum `form:"name=DisasterRecoveryMethod"`
	DisasterRecoveryURL    *string                                           `form:"name=DisasterRecoveryUrl"`
	DomainName             *string                                           `form:"name=DomainName"`
	FriendlyName           *string                                           `form:"name=FriendlyName"`
	Secure                 *bool                                             `form:"name=Secure"`
	TransferCallerID       *shared.TrunkEnumTransferCallerIDEnum             `form:"name=TransferCallerId"`
	TransferMode           *shared.TrunkEnumTransferSettingEnum              `form:"name=TransferMode"`
}

type CreateTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrunkRequest struct {
	ServerURL *string
	Request   *CreateTrunkRequestBodyCreateTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateTrunkSecurity
}

type CreateTrunkResponse struct {
	ContentType     string
	StatusCode      int64
	TrunkingV1Trunk *shared.TrunkingV1Trunk
}
