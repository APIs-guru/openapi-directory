package shared



type APIV2010AccountAuthorizedConnectApp struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ConnectAppCompanyName *string `json:"connect_app_company_name,omitempty"`
    ConnectAppDescription *string `json:"connect_app_description,omitempty"`
    ConnectAppFriendlyName *string `json:"connect_app_friendly_name,omitempty"`
    ConnectAppHomepageURL *string `json:"connect_app_homepage_url,omitempty"`
    ConnectAppSid *string `json:"connect_app_sid,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    Permissions []AuthorizedConnectAppEnumPermissionEnum `json:"permissions,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

