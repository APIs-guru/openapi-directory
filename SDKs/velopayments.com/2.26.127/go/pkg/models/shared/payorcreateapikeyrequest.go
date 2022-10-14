package shared

type PayorCreateAPIKeyRequestRolesEnum string

const (
	PayorCreateAPIKeyRequestRolesEnumPayorAdmin   PayorCreateAPIKeyRequestRolesEnum = "payor.admin"
	PayorCreateAPIKeyRequestRolesEnumPayorSupport PayorCreateAPIKeyRequestRolesEnum = "payor.support"
)

type PayorCreateAPIKeyRequest struct {
	Description *string                             `json:"description,omitempty"`
	Name        string                              `json:"name"`
	Roles       []PayorCreateAPIKeyRequestRolesEnum `json:"roles"`
}
