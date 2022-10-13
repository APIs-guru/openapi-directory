package operations

type GetDomainDomainnamePathParams struct {
	Domainname string `pathParam:"style=simple,explode=false,name=domainname"`
}

type GetDomainDomainnameRequest struct {
	PathParams GetDomainDomainnamePathParams
}

type GetDomainDomainname200ApplicationJSON struct {
	AtID    *string       `json:"@id"`
	Logo    *string       `json:"logo"`
	Members []interface{} `json:"members"`
	Name    *string       `json:"name"`
	Profile *string       `json:"profile"`
	Sub     *string       `json:"sub"`
}

type GetDomainDomainnameResponse struct {
	ContentType                                 string
	GetDomainDomainname200ApplicationJSONObject *GetDomainDomainname200ApplicationJSON
	StatusCode                                  int64
}
