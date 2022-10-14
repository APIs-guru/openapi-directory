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
	AccountSid                *string                                                 `json:"account_sid,omitempty"`
	AuthorizeRedirectURL      *string                                                 `json:"authorize_redirect_url,omitempty"`
	CompanyName               *string                                                 `json:"company_name,omitempty"`
	DeauthorizeCallbackMethod *APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum `json:"deauthorize_callback_method,omitempty"`
	DeauthorizeCallbackURL    *string                                                 `json:"deauthorize_callback_url,omitempty"`
	Description               *string                                                 `json:"description,omitempty"`
	FriendlyName              *string                                                 `json:"friendly_name,omitempty"`
	HomepageURL               *string                                                 `json:"homepage_url,omitempty"`
	Permissions               []ConnectAppEnumPermissionEnum                          `json:"permissions,omitempty"`
	Sid                       *string                                                 `json:"sid,omitempty"`
	URI                       *string                                                 `json:"uri,omitempty"`
}
