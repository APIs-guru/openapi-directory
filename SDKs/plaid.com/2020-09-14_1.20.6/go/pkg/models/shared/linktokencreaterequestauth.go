package shared




type LinkTokenCreateRequestAuthFlowTypeEnum string

const (
    LinkTokenCreateRequestAuthFlowTypeEnumFlexibleAuth LinkTokenCreateRequestAuthFlowTypeEnum = "FLEXIBLE_AUTH"
)


type LinkTokenCreateRequestAuth struct {
    FlowType LinkTokenCreateRequestAuthFlowTypeEnum `json:"flow_type"`
    
}

