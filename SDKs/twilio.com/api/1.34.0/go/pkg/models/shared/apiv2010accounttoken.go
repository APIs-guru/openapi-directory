package shared

type APIV2010AccountTokenIceServers struct {
	Credential *string `json:"credential"`
	URL        *string `json:"url"`
	Urls       *string `json:"urls"`
	Username   *string `json:"username"`
}

type APIV2010AccountToken struct {
	AccountSid  *string                          `json:"account_sid"`
	DateCreated *string                          `json:"date_created"`
	DateUpdated *string                          `json:"date_updated"`
	IceServers  []APIV2010AccountTokenIceServers `json:"ice_servers"`
	Password    *string                          `json:"password"`
	TTL         *string                          `json:"ttl"`
	Username    *string                          `json:"username"`
}
