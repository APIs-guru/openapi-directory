package operations

type GetDomainDomainnamePathParams struct {
	Domainname string `pathParam:"style=simple,explode=false,name=domainname"`
}

type GetDomainDomainnameRequest struct {
	PathParams GetDomainDomainnamePathParams
}

type GetDomainDomainname200ApplicationJSON struct {
	AtID    *string       `json:"@id,omitempty"`
	Logo    *string       `json:"logo,omitempty"`
	Members []interface{} `json:"members,omitempty"`
	Name    *string       `json:"name,omitempty"`
	Profile *string       `json:"profile,omitempty"`
	Sub     *string       `json:"sub,omitempty"`
}

type GetDomainDomainnameResponse struct {
	ContentType                                 string
	GetDomainDomainname200ApplicationJSONObject *GetDomainDomainname200ApplicationJSON
	StatusCode                                  int64
}
