package shared

type License struct {
	ActivatedAt              *int64
	AddressCity              *string
	AddressCountry           *string
	AddressPostal            *string
	AddressRegion            *string
	AddressStreet            *string
	CreatedAt                *int64
	ID                       *string
	LicenseExpiration        *int64
	LicenseLiveAssetCount    *int64
	LicenseMaxAssets         *int64
	LicenseProjectAssetCount *int64
	LicenseType              *string
	Name                     *string
	Partner                  *string
	Phone                    *string
	Settings                 map[string]interface{}
	SsoDefaultRole           *string
	SsoDomain                *string
	SsoLoginIssuerURL        *string
	SsoLoginLoginURL         *string
	SsoLoginLogoutURL        *string
	SsoLoginMessage          *string
	SsoMode                  *string
	SsoType                  *string
	SubscriptionCancelAt     *int64
	SubscriptionCanceledAt   *int64
	SubscriptionPeriodEnd    *int64
	SubscriptionPeriodStart  *int64
	UpdatedAt                *int64
	ViaReseller              *bool
}
