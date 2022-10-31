package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrunkServers = []string{
	"https://trunking.twilio.com",
}

type CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum string

const (
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumHead   CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "HEAD"
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumGet    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "GET"
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumPost   CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "POST"
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumPatch  CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "PATCH"
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumPut    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "PUT"
	CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnumDelete CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = "DELETE"
)

type CreateTrunkCreateTrunkRequest struct {
	CnamLookupEnabled      *bool                                                    `form:"name=CnamLookupEnabled"`
	DisasterRecoveryMethod *CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum `form:"name=DisasterRecoveryMethod"`
	DisasterRecoveryURL    *string                                                  `form:"name=DisasterRecoveryUrl"`
	DomainName             *string                                                  `form:"name=DomainName"`
	FriendlyName           *string                                                  `form:"name=FriendlyName"`
	Secure                 *bool                                                    `form:"name=Secure"`
	TransferCallerID       *shared.TrunkEnumTransferCallerIDEnum                    `form:"name=TransferCallerId"`
	TransferMode           *shared.TrunkEnumTransferSettingEnum                     `form:"name=TransferMode"`
}

type CreateTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrunkRequest struct {
	ServerURL *string
	Request   *CreateTrunkCreateTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateTrunkSecurity
}

type CreateTrunkResponse struct {
	ContentType     string
	StatusCode      int64
	TrunkingV1Trunk *shared.TrunkingV1Trunk
}
