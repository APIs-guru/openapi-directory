package shared

type PriceRangeTypeEnum string

const (
	PriceRangeTypeEnumStandard PriceRangeTypeEnum = "standard"
)

// PriceRange
// PriceRange
type PriceRange struct {
	Currency *string             `json:"currency,omitempty"`
	Max      *float64            `json:"max,omitempty"`
	Min      *float64            `json:"min,omitempty"`
	Type     *PriceRangeTypeEnum `json:"type,omitempty"`
}
