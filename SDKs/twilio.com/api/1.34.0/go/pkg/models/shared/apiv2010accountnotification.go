package shared

type APIV2010AccountNotificationRequestMethodEnum string

const (
	APIV2010AccountNotificationRequestMethodEnumHead   APIV2010AccountNotificationRequestMethodEnum = "HEAD"
	APIV2010AccountNotificationRequestMethodEnumGet    APIV2010AccountNotificationRequestMethodEnum = "GET"
	APIV2010AccountNotificationRequestMethodEnumPost   APIV2010AccountNotificationRequestMethodEnum = "POST"
	APIV2010AccountNotificationRequestMethodEnumPatch  APIV2010AccountNotificationRequestMethodEnum = "PATCH"
	APIV2010AccountNotificationRequestMethodEnumPut    APIV2010AccountNotificationRequestMethodEnum = "PUT"
	APIV2010AccountNotificationRequestMethodEnumDelete APIV2010AccountNotificationRequestMethodEnum = "DELETE"
)

type APIV2010AccountNotification struct {
	AccountSid    *string                                       `json:"account_sid"`
	APIVersion    *string                                       `json:"api_version"`
	CallSid       *string                                       `json:"call_sid"`
	DateCreated   *string                                       `json:"date_created"`
	DateUpdated   *string                                       `json:"date_updated"`
	ErrorCode     *string                                       `json:"error_code"`
	Log           *string                                       `json:"log"`
	MessageDate   *string                                       `json:"message_date"`
	MessageText   *string                                       `json:"message_text"`
	MoreInfo      *string                                       `json:"more_info"`
	RequestMethod *APIV2010AccountNotificationRequestMethodEnum `json:"request_method"`
	RequestURL    *string                                       `json:"request_url"`
	Sid           *string                                       `json:"sid"`
	URI           *string                                       `json:"uri"`
}
