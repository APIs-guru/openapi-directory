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
	AccountSid       *string                                               `json:"account_sid,omitempty"`
	APIVersion       *string                                               `json:"api_version,omitempty"`
	CallSid          *string                                               `json:"call_sid,omitempty"`
	DateCreated      *string                                               `json:"date_created,omitempty"`
	DateUpdated      *string                                               `json:"date_updated,omitempty"`
	ErrorCode        *string                                               `json:"error_code,omitempty"`
	Log              *string                                               `json:"log,omitempty"`
	MessageDate      *string                                               `json:"message_date,omitempty"`
	MessageText      *string                                               `json:"message_text,omitempty"`
	MoreInfo         *string                                               `json:"more_info,omitempty"`
	RequestMethod    *APIV2010AccountNotificationInstanceRequestMethodEnum `json:"request_method,omitempty"`
	RequestURL       *string                                               `json:"request_url,omitempty"`
	RequestVariables *string                                               `json:"request_variables,omitempty"`
	ResponseBody     *string                                               `json:"response_body,omitempty"`
	ResponseHeaders  *string                                               `json:"response_headers,omitempty"`
	Sid              *string                                               `json:"sid,omitempty"`
	URI              *string                                               `json:"uri,omitempty"`
}
