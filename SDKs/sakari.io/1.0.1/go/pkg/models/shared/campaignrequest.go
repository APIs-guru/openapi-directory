package shared



type CampaignRequestFilters struct {
    Attributes []string `json:"attributes,omitempty"`
    Contacts []string `json:"contacts,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}


type CampaignRequestTriggerCodeEnum string

const (
    CampaignRequestTriggerCodeEnumM CampaignRequestTriggerCodeEnum = "M"
CampaignRequestTriggerCodeEnumS CampaignRequestTriggerCodeEnum = "S"
CampaignRequestTriggerCodeEnumFu CampaignRequestTriggerCodeEnum = "FU"
)


type CampaignRequestTrigger struct {
    Code *CampaignRequestTriggerCodeEnum `json:"code,omitempty"`
    
}

type CampaignRequest struct {
    Filters *CampaignRequestFilters `json:"filters,omitempty"`
    Template *string `json:"template,omitempty"`
    Trigger *CampaignRequestTrigger `json:"trigger,omitempty"`
    
}

