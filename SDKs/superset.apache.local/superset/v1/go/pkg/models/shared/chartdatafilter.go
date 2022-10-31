package shared

type ChartDataFilterOpEnum string

const (
	ChartDataFilterOpEnumEqualEqual       ChartDataFilterOpEnum = "=="
	ChartDataFilterOpEnumNotEqual         ChartDataFilterOpEnum = "!="
	ChartDataFilterOpEnumGreaterThan      ChartDataFilterOpEnum = ">"
	ChartDataFilterOpEnumLessThan         ChartDataFilterOpEnum = "<"
	ChartDataFilterOpEnumGreaterThanEqual ChartDataFilterOpEnum = ">="
	ChartDataFilterOpEnumLessThanEqual    ChartDataFilterOpEnum = "<="
	ChartDataFilterOpEnumLike             ChartDataFilterOpEnum = "LIKE"
	ChartDataFilterOpEnumIlike            ChartDataFilterOpEnum = "ILIKE"
	ChartDataFilterOpEnumIsNull           ChartDataFilterOpEnum = "IS NULL"
	ChartDataFilterOpEnumIsNotNull        ChartDataFilterOpEnum = "IS NOT NULL"
	ChartDataFilterOpEnumIn               ChartDataFilterOpEnum = "IN"
	ChartDataFilterOpEnumNotIn            ChartDataFilterOpEnum = "NOT IN"
	ChartDataFilterOpEnumRegex            ChartDataFilterOpEnum = "REGEX"
	ChartDataFilterOpEnumIsTrue           ChartDataFilterOpEnum = "IS TRUE"
	ChartDataFilterOpEnumIsFalse          ChartDataFilterOpEnum = "IS FALSE"
)

type ChartDataFilter struct {
	Col string                `json:"col"`
	Op  ChartDataFilterOpEnum `json:"op"`
	Val *interface{}          `json:"val,omitempty"`
}
