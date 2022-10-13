package shared

type AbsenceEntitlementValueAttributes struct {
	Entitlement *float64 `json:"entitlement"`
	ID          *int64   `json:"id"`
	Name        *string  `json:"name"`
}

type AbsenceEntitlementValueTypeEnum string

const (
	AbsenceEntitlementValueTypeEnumTimeOffType AbsenceEntitlementValueTypeEnum = "TimeOffType"
)

type AbsenceEntitlementValue struct {
	Attributes *AbsenceEntitlementValueAttributes `json:"attributes"`
	Type       *AbsenceEntitlementValueTypeEnum   `json:"type"`
}

type AbsenceEntitlement struct {
	Label string                    `json:"label"`
	Value []AbsenceEntitlementValue `json:"value"`
}
