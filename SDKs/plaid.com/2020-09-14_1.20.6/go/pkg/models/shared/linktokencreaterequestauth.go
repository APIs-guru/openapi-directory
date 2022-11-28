package shared

type LinkTokenCreateRequestAuthFlowTypeEnum string

const (
	LinkTokenCreateRequestAuthFlowTypeEnumFlexibleAuth LinkTokenCreateRequestAuthFlowTypeEnum = "FLEXIBLE_AUTH"
)

// LinkTokenCreateRequestAuth
// Specifies options for initializing Link for use with the Auth product. This field is currently only required if using the Flexible Auth product (currently in closed beta).
type LinkTokenCreateRequestAuth struct {
	FlowType LinkTokenCreateRequestAuthFlowTypeEnum `json:"flow_type"`
}
