package shared



type TimeOffTypeResourceAttributes struct {
    Name *string `json:"name,omitempty"`
    
}


type TimeOffTypeResourceTypeEnum string

const (
    TimeOffTypeResourceTypeEnumTimeOffType TimeOffTypeResourceTypeEnum = "TimeOffType"
)


type TimeOffTypeResource struct {
    Attributes *TimeOffTypeResourceAttributes `json:"attributes,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Type *TimeOffTypeResourceTypeEnum `json:"type,omitempty"`
    
}

