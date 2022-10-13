package operations

type GetInvoiceUblVersionedPackageVersionEnum string

const (
	GetInvoiceUblVersionedPackageVersionEnumOriginal GetInvoiceUblVersionedPackageVersionEnum = "original"
	GetInvoiceUblVersionedPackageVersionEnumSi11     GetInvoiceUblVersionedPackageVersionEnum = "si11"
	GetInvoiceUblVersionedPackageVersionEnumSi12     GetInvoiceUblVersionedPackageVersionEnum = "si12"
	GetInvoiceUblVersionedPackageVersionEnumSi20     GetInvoiceUblVersionedPackageVersionEnum = "si20"
	GetInvoiceUblVersionedPackageVersionEnumAunz     GetInvoiceUblVersionedPackageVersionEnum = "aunz"
	GetInvoiceUblVersionedPackageVersionEnumSg       GetInvoiceUblVersionedPackageVersionEnum = "sg"
)

type GetInvoiceUblVersionedPackagingEnum string

const (
	GetInvoiceUblVersionedPackagingEnumUbl GetInvoiceUblVersionedPackagingEnum = "ubl"
)

type GetInvoiceUblVersionedPathParams struct {
	GUID           string                                   `pathParam:"style=simple,explode=false,name=guid"`
	PackageVersion GetInvoiceUblVersionedPackageVersionEnum `pathParam:"style=simple,explode=false,name=package_version"`
	Packaging      GetInvoiceUblVersionedPackagingEnum      `pathParam:"style=simple,explode=false,name=packaging"`
}

type GetInvoiceUblVersionedRequest struct {
	PathParams GetInvoiceUblVersionedPathParams
}

type GetInvoiceUblVersionedResponse struct {
	ContentType        string
	PurchaseInvoiceUbl *interface{}
	StatusCode         int64
}
