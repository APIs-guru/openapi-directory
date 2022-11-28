package operations

type GetTenantTenantnamePathParams struct {
	Tenantname string `pathParam:"style=simple,explode=false,name=tenantname"`
}

type GetTenantTenantname200ApplicationJSON struct {
	AtID        *string       `json:"@id,omitempty"`
	About       *string       `json:"about,omitempty"`
	Attribution *string       `json:"attribution,omitempty"`
	Depot       *string       `json:"depot,omitempty"`
	Depots      []interface{} `json:"depots,omitempty"`
	Domain      *bool         `json:"domain,omitempty"`
	Factories   []interface{} `json:"factories,omitempty"`
	Factory     *string       `json:"factory,omitempty"`
	Favicon     *string       `json:"favicon,omitempty"`
	Issuer      string        `json:"issuer"`
	Logo        *string       `json:"logo,omitempty"`
	Name        *string       `json:"name,omitempty"`
	Script      *string       `json:"script,omitempty"`
	Sheet       *string       `json:"sheet,omitempty"`
	Sub         string        `json:"sub"`
	Subtenant   *bool         `json:"subtenant,omitempty"`
	Summary     *string       `json:"summary,omitempty"`
	Template    *string       `json:"template,omitempty"`
	Theme       *string       `json:"theme,omitempty"`
	Userinfo    *string       `json:"userinfo,omitempty"`
	Website     *string       `json:"website,omitempty"`
}

type GetTenantTenantnameRequest struct {
	PathParams GetTenantTenantnamePathParams
}

type GetTenantTenantnameResponse struct {
	ContentType                                 string
	GetTenantTenantname200ApplicationJSONObject *GetTenantTenantname200ApplicationJSON
	StatusCode                                  int64
}
