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
	AccountSid       *string                                                       `json:"account_sid,omitempty"`
	APIVersion       *string                                                       `json:"api_version,omitempty"`
	CallSid          *string                                                       `json:"call_sid,omitempty"`
	DateCreated      *string                                                       `json:"date_created,omitempty"`
	DateUpdated      *string                                                       `json:"date_updated,omitempty"`
	ErrorCode        *string                                                       `json:"error_code,omitempty"`
	Log              *string                                                       `json:"log,omitempty"`
	MessageDate      *string                                                       `json:"message_date,omitempty"`
	MessageText      *string                                                       `json:"message_text,omitempty"`
	MoreInfo         *string                                                       `json:"more_info,omitempty"`
	RequestMethod    *APIV2010AccountCallCallNotificationInstanceRequestMethodEnum `json:"request_method,omitempty"`
	RequestURL       *string                                                       `json:"request_url,omitempty"`
	RequestVariables *string                                                       `json:"request_variables,omitempty"`
	ResponseBody     *string                                                       `json:"response_body,omitempty"`
	ResponseHeaders  *string                                                       `json:"response_headers,omitempty"`
	Sid              *string                                                       `json:"sid,omitempty"`
	URI              *string                                                       `json:"uri,omitempty"`
}
