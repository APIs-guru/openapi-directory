package shared

type APIV2010AccountTokenIceServers struct {
	Credential *string `json:"credential,omitempty"`
	URL        *string `json:"url,omitempty"`
	Urls       *string `json:"urls,omitempty"`
	Username   *string `json:"username,omitempty"`
}

type APIV2010AccountToken struct {
	AccountSid  *string                          `json:"account_sid,omitempty"`
	DateCreated *string                          `json:"date_created,omitempty"`
	DateUpdated *string                          `json:"date_updated,omitempty"`
	IceServers  []APIV2010AccountTokenIceServers `json:"ice_servers,omitempty"`
	Password    *string                          `json:"password,omitempty"`
	TTL         *string                          `json:"ttl,omitempty"`
	Username    *string                          `json:"username,omitempty"`
}
