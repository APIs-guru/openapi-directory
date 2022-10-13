package shared

type APIV2010AccountAuthorizedConnectApp struct {
	AccountSid             *string                                  `json:"account_sid"`
	ConnectAppCompanyName  *string                                  `json:"connect_app_company_name"`
	ConnectAppDescription  *string                                  `json:"connect_app_description"`
	ConnectAppFriendlyName *string                                  `json:"connect_app_friendly_name"`
	ConnectAppHomepageURL  *string                                  `json:"connect_app_homepage_url"`
	ConnectAppSid          *string                                  `json:"connect_app_sid"`
	DateCreated            *string                                  `json:"date_created"`
	DateUpdated            *string                                  `json:"date_updated"`
	Permissions            []AuthorizedConnectAppEnumPermissionEnum `json:"permissions"`
	URI                    *string                                  `json:"uri"`
}
