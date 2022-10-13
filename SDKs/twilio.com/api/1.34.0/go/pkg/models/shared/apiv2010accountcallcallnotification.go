package shared

type APIV2010AccountCallCallNotificationRequestMethodEnum string

const (
	APIV2010AccountCallCallNotificationRequestMethodEnumHead   APIV2010AccountCallCallNotificationRequestMethodEnum = "HEAD"
	APIV2010AccountCallCallNotificationRequestMethodEnumGet    APIV2010AccountCallCallNotificationRequestMethodEnum = "GET"
	APIV2010AccountCallCallNotificationRequestMethodEnumPost   APIV2010AccountCallCallNotificationRequestMethodEnum = "POST"
	APIV2010AccountCallCallNotificationRequestMethodEnumPatch  APIV2010AccountCallCallNotificationRequestMethodEnum = "PATCH"
	APIV2010AccountCallCallNotificationRequestMethodEnumPut    APIV2010AccountCallCallNotificationRequestMethodEnum = "PUT"
	APIV2010AccountCallCallNotificationRequestMethodEnumDelete APIV2010AccountCallCallNotificationRequestMethodEnum = "DELETE"
)

type APIV2010AccountCallCallNotification struct {
	AccountSid    *string                                               `json:"account_sid"`
	APIVersion    *string                                               `json:"api_version"`
	CallSid       *string                                               `json:"call_sid"`
	DateCreated   *string                                               `json:"date_created"`
	DateUpdated   *string                                               `json:"date_updated"`
	ErrorCode     *string                                               `json:"error_code"`
	Log           *string                                               `json:"log"`
	MessageDate   *string                                               `json:"message_date"`
	MessageText   *string                                               `json:"message_text"`
	MoreInfo      *string                                               `json:"more_info"`
	RequestMethod *APIV2010AccountCallCallNotificationRequestMethodEnum `json:"request_method"`
	RequestURL    *string                                               `json:"request_url"`
	Sid           *string                                               `json:"sid"`
	URI           *string                                               `json:"uri"`
}
