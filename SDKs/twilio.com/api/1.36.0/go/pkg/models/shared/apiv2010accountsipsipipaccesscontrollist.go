package shared



type APIV2010AccountSipSipIPAccessControlList struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

