package shared




type CreateTimeOffPeriodResponseDataTypeEnum string

const (
    CreateTimeOffPeriodResponseDataTypeEnumTimeOffPeriod CreateTimeOffPeriodResponseDataTypeEnum = "TimeOffPeriod"
)


type CreateTimeOffPeriodResponseData struct {
    Attributes *interface{} `json:"attributes,omitempty"`
    Type *CreateTimeOffPeriodResponseDataTypeEnum `json:"type,omitempty"`
    
}

type CreateTimeOffPeriodResponse struct {
    Data CreateTimeOffPeriodResponseData `json:"data"`
    Success bool `json:"success"`
    
}

