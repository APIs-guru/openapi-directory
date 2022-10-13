package operations

import (
	"openapi/pkg/models/shared"
)

var CreateNotificationServers = []string{
	"https://notify.twilio.com",
}

type CreateNotificationPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateNotificationRequestBodyCreateNotificationRequest struct {
	Action              *string                              `form:"name=Action"`
	Alexa               *interface{}                         `form:"name=Alexa"`
	Apn                 *interface{}                         `form:"name=Apn"`
	Body                *string                              `form:"name=Body"`
	Data                *interface{}                         `form:"name=Data"`
	DeliveryCallbackURL *string                              `form:"name=DeliveryCallbackUrl"`
	FacebookMessenger   *interface{}                         `form:"name=FacebookMessenger"`
	Fcm                 *interface{}                         `form:"name=Fcm"`
	Gcm                 *interface{}                         `form:"name=Gcm"`
	Identity            []string                             `form:"name=Identity"`
	Priority            *shared.NotificationEnumPriorityEnum `form:"name=Priority"`
	Segment             []string                             `form:"name=Segment"`
	Sms                 *interface{}                         `form:"name=Sms"`
	Sound               *string                              `form:"name=Sound"`
	Tag                 []string                             `form:"name=Tag"`
	Title               *string                              `form:"name=Title"`
	ToBinding           []string                             `form:"name=ToBinding"`
	TTL                 *int64                               `form:"name=Ttl"`
}

type CreateNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateNotificationRequest struct {
	ServerURL  *string
	PathParams CreateNotificationPathParams
	Request    *CreateNotificationRequestBodyCreateNotificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateNotificationSecurity
}

type CreateNotificationResponse struct {
	ContentType                 string
	StatusCode                  int64
	NotifyV1ServiceNotification *shared.NotifyV1ServiceNotification
}
