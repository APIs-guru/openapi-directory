package operations

type GetDomainPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetDomainQueryParams struct {
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
}

type GetDomain200ApplicationJSONDomainAliases struct {
	Alias   string `json:"alias"`
	Created int64  `json:"created"`
	ID      string `json:"id"`
}

type GetDomain200ApplicationJSONDomainCerts struct {
	Cns     []string `json:"cns"`
	Created int64    `json:"created"`
	ID      string   `json:"id"`
}

// GetDomain200ApplicationJSONDomainCreator
// Information about who added the domain
type GetDomain200ApplicationJSONDomainCreator struct {
	CustomerID       *string `json:"customerId,omitempty"`
	Email            string  `json:"email"`
	ID               string  `json:"id"`
	IsDomainReseller *bool   `json:"isDomainReseller,omitempty"`
	Username         string  `json:"username"`
}

type GetDomain200ApplicationJSONDomainServiceTypeEnum string

const (
	GetDomain200ApplicationJSONDomainServiceTypeEnumZeitWorld GetDomain200ApplicationJSONDomainServiceTypeEnum = "zeit.world"
	GetDomain200ApplicationJSONDomainServiceTypeEnumExternal  GetDomain200ApplicationJSONDomainServiceTypeEnum = "external"
	GetDomain200ApplicationJSONDomainServiceTypeEnumNa        GetDomain200ApplicationJSONDomainServiceTypeEnum = "na"
)

// GetDomain200ApplicationJSONDomain
// The domain information
type GetDomain200ApplicationJSONDomain struct {
	Aliases             []GetDomain200ApplicationJSONDomainAliases       `json:"aliases"`
	BoughtAt            int64                                            `json:"boughtAt"`
	CdnEnabled          bool                                             `json:"cdnEnabled"`
	Certs               []GetDomain200ApplicationJSONDomainCerts         `json:"certs"`
	CreatedAt           int64                                            `json:"createdAt"`
	Creator             GetDomain200ApplicationJSONDomainCreator         `json:"creator"`
	ExpiresAt           int64                                            `json:"expiresAt"`
	ID                  string                                           `json:"id"`
	IntendedNameservers []string                                         `json:"intendedNameservers"`
	Name                string                                           `json:"name"`
	Nameservers         []string                                         `json:"nameservers"`
	NsVerifiedAt        int64                                            `json:"nsVerifiedAt"`
	OrderedAt           *int64                                           `json:"orderedAt,omitempty"`
	ServiceType         GetDomain200ApplicationJSONDomainServiceTypeEnum `json:"serviceType"`
	Suffix              bool                                             `json:"suffix"`
	TransferredAt       *int64                                           `json:"transferredAt,omitempty"`
	TxtVerifiedAt       int64                                            `json:"txtVerifiedAt"`
	VerificationRecord  string                                           `json:"verificationRecord"`
	Verified            bool                                             `json:"verified"`
}

type GetDomain200ApplicationJSON struct {
	Domain GetDomain200ApplicationJSONDomain `json:"domain"`
}

type GetDomain404ApplicationJSONErrorCodeEnum string

const (
	GetDomain404ApplicationJSONErrorCodeEnumNotFound GetDomain404ApplicationJSONErrorCodeEnum = "not_found"
)

type GetDomain404ApplicationJSONError struct {
	Code    GetDomain404ApplicationJSONErrorCodeEnum `json:"code"`
	Message string                                   `json:"message"`
	Name    string                                   `json:"name"`
}

type GetDomain404ApplicationJSON struct {
	Error GetDomain404ApplicationJSONError `json:"error"`
}

type GetDomainRequest struct {
	PathParams  GetDomainPathParams
	QueryParams GetDomainQueryParams
}

type GetDomainResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetDomain200ApplicationJSONObject *GetDomain200ApplicationJSON
	GetDomain404ApplicationJSONObject *GetDomain404ApplicationJSON
}
