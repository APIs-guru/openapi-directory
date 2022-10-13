package shared

type CreateDistributionLinks struct {
	Action         *string `json:"action"`
	Description    *string `json:"description"`
	ExpirationDate *string `json:"expirationDate"`
	LinkType       *string `json:"linkType"`
	MailingListID  *string `json:"mailingListId"`
	SurveyID       *string `json:"surveyId"`
}
