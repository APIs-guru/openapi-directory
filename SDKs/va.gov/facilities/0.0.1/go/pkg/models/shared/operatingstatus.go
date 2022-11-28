package shared

type OperatingStatusCodeEnum string

const (
	OperatingStatusCodeEnumNormal  OperatingStatusCodeEnum = "NORMAL"
	OperatingStatusCodeEnumNotice  OperatingStatusCodeEnum = "NOTICE"
	OperatingStatusCodeEnumLimited OperatingStatusCodeEnum = "LIMITED"
	OperatingStatusCodeEnumClosed  OperatingStatusCodeEnum = "CLOSED"
)

// OperatingStatus
// Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
type OperatingStatus struct {
	AdditionalInfo *string                 `json:"additional_info,omitempty"`
	Code           OperatingStatusCodeEnum `json:"code"`
}
