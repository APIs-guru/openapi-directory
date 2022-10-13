package shared

type APIV2010AccountCallCallNotificationInstanceRequestMethodEnum string

const (
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumHead   APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "HEAD"
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumGet    APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "GET"
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumPost   APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "POST"
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumPatch  APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "PATCH"
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumPut    APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "PUT"
	APIV2010AccountCallCallNotificationInstanceRequestMethodEnumDelete APIV2010AccountCallCallNotificationInstanceRequestMethodEnum = "DELETE"
)

type APIV2010AccountCallCallNotificationInstance struct {
	AccountSid       *string                                                       `json:"account_sid"`
	APIVersion       *string                                                       `json:"api_version"`
	CallSid          *string                                                       `json:"call_sid"`
	DateCreated      *string                                                       `json:"date_created"`
	DateUpdated      *string                                                       `json:"date_updated"`
	ErrorCode        *string                                                       `json:"error_code"`
	Log              *string                                                       `json:"log"`
	MessageDate      *string                                                       `json:"message_date"`
	MessageText      *string                                                       `json:"message_text"`
	MoreInfo         *string                                                       `json:"more_info"`
	RequestMethod    *APIV2010AccountCallCallNotificationInstanceRequestMethodEnum `json:"request_method"`
	RequestURL       *string                                                       `json:"request_url"`
	RequestVariables *string                                                       `json:"request_variables"`
	ResponseBody     *string                                                       `json:"response_body"`
	ResponseHeaders  *string                                                       `json:"response_headers"`
	Sid              *string                                                       `json:"sid"`
	URI              *string                                                       `json:"uri"`
}
