package shared

type CampaignResponse struct {
	Data    *Campaign `json:"data"`
	Success *bool     `json:"success"`
}
