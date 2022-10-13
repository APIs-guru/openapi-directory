package operations

import (
	"openapi/pkg/models/shared"
)

var CreateExternalCampaignServers = []string{
	"https://messaging.twilio.com",
}

type CreateExternalCampaignRequestBodyCreateExternalCampaignRequest struct {
	CampaignID          string `form:"name=CampaignId"`
	MessagingServiceSid string `form:"name=MessagingServiceSid"`
}

type CreateExternalCampaignSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateExternalCampaignRequest struct {
	ServerURL *string
	Request   *CreateExternalCampaignRequestBodyCreateExternalCampaignRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateExternalCampaignSecurity
}

type CreateExternalCampaignResponse struct {
	ContentType                 string
	StatusCode                  int64
	MessagingV1ExternalCampaign *shared.MessagingV1ExternalCampaign
}
