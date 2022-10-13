package shared

type APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum string

const (
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumHead   APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "HEAD"
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumGet    APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "GET"
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumPost   APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "POST"
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumPatch  APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "PATCH"
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumPut    APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "PUT"
	APIV2010AccountConnectAppDeauthorizeCallbackMethodEnumDelete APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum = "DELETE"
)

type APIV2010AccountConnectApp struct {
	AccountSid                *string                                                 `json:"account_sid"`
	AuthorizeRedirectURL      *string                                                 `json:"authorize_redirect_url"`
	CompanyName               *string                                                 `json:"company_name"`
	DeauthorizeCallbackMethod *APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum `json:"deauthorize_callback_method"`
	DeauthorizeCallbackURL    *string                                                 `json:"deauthorize_callback_url"`
	Description               *string                                                 `json:"description"`
	FriendlyName              *string                                                 `json:"friendly_name"`
	HomepageURL               *string                                                 `json:"homepage_url"`
	Permissions               []ConnectAppEnumPermissionEnum                          `json:"permissions"`
	Sid                       *string                                                 `json:"sid"`
	URI                       *string                                                 `json:"uri"`
}
