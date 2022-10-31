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
	AccountSid    *string                                               `json:"account_sid,omitempty"`
	APIVersion    *string                                               `json:"api_version,omitempty"`
	CallSid       *string                                               `json:"call_sid,omitempty"`
	DateCreated   *string                                               `json:"date_created,omitempty"`
	DateUpdated   *string                                               `json:"date_updated,omitempty"`
	ErrorCode     *string                                               `json:"error_code,omitempty"`
	Log           *string                                               `json:"log,omitempty"`
	MessageDate   *string                                               `json:"message_date,omitempty"`
	MessageText   *string                                               `json:"message_text,omitempty"`
	MoreInfo      *string                                               `json:"more_info,omitempty"`
	RequestMethod *APIV2010AccountCallCallNotificationRequestMethodEnum `json:"request_method,omitempty"`
	RequestURL    *string                                               `json:"request_url,omitempty"`
	Sid           *string                                               `json:"sid,omitempty"`
	URI           *string                                               `json:"uri,omitempty"`
}
