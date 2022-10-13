package shared

type TimeOffTypeResourceAttributes struct {
	Name *string `json:"name"`
}

type TimeOffTypeResourceTypeEnum string

const (
	TimeOffTypeResourceTypeEnumTimeOffType TimeOffTypeResourceTypeEnum = "TimeOffType"
)

type TimeOffTypeResource struct {
	Attributes *TimeOffTypeResourceAttributes `json:"attributes"`
	ID         *int64                         `json:"id"`
	Type       *TimeOffTypeResourceTypeEnum   `json:"type"`
}
