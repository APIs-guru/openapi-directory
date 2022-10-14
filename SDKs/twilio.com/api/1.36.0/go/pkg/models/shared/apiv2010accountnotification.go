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
	AccountSid    *string                                       `json:"account_sid,omitempty"`
	APIVersion    *string                                       `json:"api_version,omitempty"`
	CallSid       *string                                       `json:"call_sid,omitempty"`
	DateCreated   *string                                       `json:"date_created,omitempty"`
	DateUpdated   *string                                       `json:"date_updated,omitempty"`
	ErrorCode     *string                                       `json:"error_code,omitempty"`
	Log           *string                                       `json:"log,omitempty"`
	MessageDate   *string                                       `json:"message_date,omitempty"`
	MessageText   *string                                       `json:"message_text,omitempty"`
	MoreInfo      *string                                       `json:"more_info,omitempty"`
	RequestMethod *APIV2010AccountNotificationRequestMethodEnum `json:"request_method,omitempty"`
	RequestURL    *string                                       `json:"request_url,omitempty"`
	Sid           *string                                       `json:"sid,omitempty"`
	URI           *string                                       `json:"uri,omitempty"`
}
