package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateMessageServers = []string{
	"https://api.twilio.com",
}

type CreateMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateMessageCreateMessageRequest struct {
	AddressRetention    *shared.MessageEnumAddressRetentionEnum `form:"name=AddressRetention"`
	ApplicationSid      *string                                 `form:"name=ApplicationSid"`
	Attempt             *int64                                  `form:"name=Attempt"`
	Body                *string                                 `form:"name=Body"`
	ContentRetention    *shared.MessageEnumContentRetentionEnum `form:"name=ContentRetention"`
	ForceDelivery       *bool                                   `form:"name=ForceDelivery"`
	From                *string                                 `form:"name=From"`
	MaxPrice            *float64                                `form:"name=MaxPrice"`
	MediaURL            []string                                `form:"name=MediaUrl"`
	MessagingServiceSid *string                                 `form:"name=MessagingServiceSid"`
	PersistentAction    []string                                `form:"name=PersistentAction"`
	ProvideFeedback     *bool                                   `form:"name=ProvideFeedback"`
	ScheduleType        *shared.MessageEnumScheduleTypeEnum     `form:"name=ScheduleType"`
	SendAsMms           *bool                                   `form:"name=SendAsMms"`
	SendAt              *time.Time                              `form:"name=SendAt"`
	SmartEncoded        *bool                                   `form:"name=SmartEncoded"`
	StatusCallback      *string                                 `form:"name=StatusCallback"`
	To                  string                                  `form:"name=To"`
	ValidityPeriod      *int64                                  `form:"name=ValidityPeriod"`
}

type CreateMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMessageRequest struct {
	ServerURL  *string
	PathParams CreateMessagePathParams
	Request    *CreateMessageCreateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMessageSecurity
}

type CreateMessageResponse struct {
	ContentType            string
	StatusCode             int64
	APIV2010AccountMessage *shared.APIV2010AccountMessage
}
