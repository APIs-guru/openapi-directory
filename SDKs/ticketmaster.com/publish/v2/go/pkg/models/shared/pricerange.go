package shared

type PriceRangeTypeEnum string

const (
	PriceRangeTypeEnumStandard PriceRangeTypeEnum = "standard"
)

type PriceRange struct {
	Currency *string             `json:"currency"`
	Max      *float64            `json:"max"`
	Min      *float64            `json:"min"`
	Type     *PriceRangeTypeEnum `json:"type"`
}
