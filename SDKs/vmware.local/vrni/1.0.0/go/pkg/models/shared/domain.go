package shared

type DomainDomainTypeEnum string

const (
	DomainDomainTypeEnumLdap  DomainDomainTypeEnum = "LDAP"
	DomainDomainTypeEnumLocal DomainDomainTypeEnum = "LOCAL"
)

type Domain struct {
	DomainType *DomainDomainTypeEnum `json:"domain_type"`
	Value      *string               `json:"value"`
}
