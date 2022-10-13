package shared

import (
	"time"
)

type NotifyV1ServiceNotification struct {
	AccountSid        *string                       `json:"account_sid"`
	Action            *string                       `json:"action"`
	Alexa             *interface{}                  `json:"alexa"`
	Apn               *interface{}                  `json:"apn"`
	Body              *string                       `json:"body"`
	Data              *interface{}                  `json:"data"`
	DateCreated       *time.Time                    `json:"date_created"`
	FacebookMessenger *interface{}                  `json:"facebook_messenger"`
	Fcm               *interface{}                  `json:"fcm"`
	Gcm               *interface{}                  `json:"gcm"`
	Identities        []string                      `json:"identities"`
	Priority          *NotificationEnumPriorityEnum `json:"priority"`
	Segments          []string                      `json:"segments"`
	ServiceSid        *string                       `json:"service_sid"`
	Sid               *string                       `json:"sid"`
	Sms               *interface{}                  `json:"sms"`
	Sound             *string                       `json:"sound"`
	Tags              []string                      `json:"tags"`
	Title             *string                       `json:"title"`
	TTL               *int64                        `json:"ttl"`
}
