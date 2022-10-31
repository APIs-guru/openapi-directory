package shared




type OperatingStatusCodeEnum string

const (
    OperatingStatusCodeEnumNormal OperatingStatusCodeEnum = "NORMAL"
OperatingStatusCodeEnumNotice OperatingStatusCodeEnum = "NOTICE"
OperatingStatusCodeEnumLimited OperatingStatusCodeEnum = "LIMITED"
OperatingStatusCodeEnumClosed OperatingStatusCodeEnum = "CLOSED"
)


type OperatingStatus struct {
    AdditionalInfo *string `json:"additional_info,omitempty"`
    Code OperatingStatusCodeEnum `json:"code"`
    
}

