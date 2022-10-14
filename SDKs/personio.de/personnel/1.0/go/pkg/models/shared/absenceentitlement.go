package shared

type AbsenceEntitlementValueAttributes struct {
	Entitlement *float64 `json:"entitlement,omitempty"`
	ID          *int64   `json:"id,omitempty"`
	Name        *string  `json:"name,omitempty"`
}

type AbsenceEntitlementValueTypeEnum string

const (
	AbsenceEntitlementValueTypeEnumTimeOffType AbsenceEntitlementValueTypeEnum = "TimeOffType"
)

type AbsenceEntitlementValue struct {
	Attributes *AbsenceEntitlementValueAttributes `json:"attributes,omitempty"`
	Type       *AbsenceEntitlementValueTypeEnum   `json:"type,omitempty"`
}

type AbsenceEntitlement struct {
	Label string                    `json:"label"`
	Value []AbsenceEntitlementValue `json:"value"`
}
