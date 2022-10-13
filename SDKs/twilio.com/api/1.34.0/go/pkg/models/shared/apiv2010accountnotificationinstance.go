package shared

type APIV2010AccountNotificationInstanceRequestMethodEnum string

const (
	APIV2010AccountNotificationInstanceRequestMethodEnumHead   APIV2010AccountNotificationInstanceRequestMethodEnum = "HEAD"
	APIV2010AccountNotificationInstanceRequestMethodEnumGet    APIV2010AccountNotificationInstanceRequestMethodEnum = "GET"
	APIV2010AccountNotificationInstanceRequestMethodEnumPost   APIV2010AccountNotificationInstanceRequestMethodEnum = "POST"
	APIV2010AccountNotificationInstanceRequestMethodEnumPatch  APIV2010AccountNotificationInstanceRequestMethodEnum = "PATCH"
	APIV2010AccountNotificationInstanceRequestMethodEnumPut    APIV2010AccountNotificationInstanceRequestMethodEnum = "PUT"
	APIV2010AccountNotificationInstanceRequestMethodEnumDelete APIV2010AccountNotificationInstanceRequestMethodEnum = "DELETE"
)

type APIV2010AccountNotificationInstance struct {
	AccountSid       *string                                               `json:"account_sid"`
	APIVersion       *string                                               `json:"api_version"`
	CallSid          *string                                               `json:"call_sid"`
	DateCreated      *string                                               `json:"date_created"`
	DateUpdated      *string                                               `json:"date_updated"`
	ErrorCode        *string                                               `json:"error_code"`
	Log              *string                                               `json:"log"`
	MessageDate      *string                                               `json:"message_date"`
	MessageText      *string                                               `json:"message_text"`
	MoreInfo         *string                                               `json:"more_info"`
	RequestMethod    *APIV2010AccountNotificationInstanceRequestMethodEnum `json:"request_method"`
	RequestURL       *string                                               `json:"request_url"`
	RequestVariables *string                                               `json:"request_variables"`
	ResponseBody     *string                                               `json:"response_body"`
	ResponseHeaders  *string                                               `json:"response_headers"`
	Sid              *string                                               `json:"sid"`
	URI              *string                                               `json:"uri"`
}
