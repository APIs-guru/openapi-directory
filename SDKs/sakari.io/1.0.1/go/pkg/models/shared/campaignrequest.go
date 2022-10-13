package shared

type CampaignRequestFilters struct {
	Attributes []string `json:"attributes"`
	Contacts   []string `json:"contacts"`
	Tags       []string `json:"tags"`
}

type CampaignRequestTriggerCodeEnum string

const (
	CampaignRequestTriggerCodeEnumM  CampaignRequestTriggerCodeEnum = "M"
	CampaignRequestTriggerCodeEnumS  CampaignRequestTriggerCodeEnum = "S"
	CampaignRequestTriggerCodeEnumFu CampaignRequestTriggerCodeEnum = "FU"
)

type CampaignRequestTrigger struct {
	Code *CampaignRequestTriggerCodeEnum `json:"code"`
}

type CampaignRequest struct {
	Filters  *CampaignRequestFilters `json:"filters"`
	Template *string                 `json:"template"`
	Trigger  *CampaignRequestTrigger `json:"trigger"`
}
