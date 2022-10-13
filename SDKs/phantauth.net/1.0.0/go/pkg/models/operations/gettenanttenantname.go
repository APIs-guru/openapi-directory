package operations

type GetTenantTenantnamePathParams struct {
	Tenantname string `pathParam:"style=simple,explode=false,name=tenantname"`
}

type GetTenantTenantnameRequest struct {
	PathParams GetTenantTenantnamePathParams
}

type GetTenantTenantname200ApplicationJSON struct {
	AtID        *string       `json:"@id"`
	About       *string       `json:"about"`
	Attribution *string       `json:"attribution"`
	Depot       *string       `json:"depot"`
	Depots      []interface{} `json:"depots"`
	Domain      *bool         `json:"domain"`
	Factories   []interface{} `json:"factories"`
	Factory     *string       `json:"factory"`
	Favicon     *string       `json:"favicon"`
	Issuer      string        `json:"issuer"`
	Logo        *string       `json:"logo"`
	Name        *string       `json:"name"`
	Script      *string       `json:"script"`
	Sheet       *string       `json:"sheet"`
	Sub         string        `json:"sub"`
	Subtenant   *bool         `json:"subtenant"`
	Summary     *string       `json:"summary"`
	Template    *string       `json:"template"`
	Theme       *string       `json:"theme"`
	Userinfo    *string       `json:"userinfo"`
	Website     *string       `json:"website"`
}

type GetTenantTenantnameResponse struct {
	ContentType                                 string
	GetTenantTenantname200ApplicationJSONObject *GetTenantTenantname200ApplicationJSON
	StatusCode                                  int64
}
