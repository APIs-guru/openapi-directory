package operations

type GetDomainsQueryParams struct {
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
}

type GetDomainsRequest struct {
	QueryParams GetDomainsQueryParams
}

type GetDomains200ApplicationJSONDomainsServiceTypeEnum string

const (
	GetDomains200ApplicationJSONDomainsServiceTypeEnumZeitWorld GetDomains200ApplicationJSONDomainsServiceTypeEnum = "zeit.world"
	GetDomains200ApplicationJSONDomainsServiceTypeEnumExternal  GetDomains200ApplicationJSONDomainsServiceTypeEnum = "external"
	GetDomains200ApplicationJSONDomainsServiceTypeEnumNa        GetDomains200ApplicationJSONDomainsServiceTypeEnum = "na"
)

type GetDomains200ApplicationJSONDomains struct {
	BoughtAt            int64                                              `json:"boughtAt"`
	CdnEnabled          bool                                               `json:"cdnEnabled"`
	CreatedAt           int64                                              `json:"createdAt"`
	ExpiresAt           int64                                              `json:"expiresAt"`
	ID                  string                                             `json:"id"`
	IntendedNameservers []string                                           `json:"intendedNameservers"`
	Name                string                                             `json:"name"`
	Nameservers         []string                                           `json:"nameservers"`
	NsVerifiedAt        int64                                              `json:"nsVerifiedAt"`
	OrderedAt           *int64                                             `json:"orderedAt"`
	ServiceType         GetDomains200ApplicationJSONDomainsServiceTypeEnum `json:"serviceType"`
	TransferredAt       *int64                                             `json:"transferredAt"`
	TxtVerifiedAt       int64                                              `json:"txtVerifiedAt"`
	VerificationRecord  string                                             `json:"verificationRecord"`
	Verified            bool                                               `json:"verified"`
}

type GetDomains200ApplicationJSON struct {
	Domains []GetDomains200ApplicationJSONDomains `json:"domains"`
}

type GetDomainsResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetDomains200ApplicationJSONObject *GetDomains200ApplicationJSON
}
