package shared

type CreateTimeOffPeriodResponseDataTypeEnum string

const (
	CreateTimeOffPeriodResponseDataTypeEnumTimeOffPeriod CreateTimeOffPeriodResponseDataTypeEnum = "TimeOffPeriod"
)

type CreateTimeOffPeriodResponseData struct {
	Attributes *interface{}                             `json:"attributes"`
	Type       *CreateTimeOffPeriodResponseDataTypeEnum `json:"type"`
}

type CreateTimeOffPeriodResponse struct {
	Data    CreateTimeOffPeriodResponseData `json:"data"`
	Success bool                            `json:"success"`
}
