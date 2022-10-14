package shared

type CreateDistributionLinks struct {
	Action         *string `json:"action,omitempty"`
	Description    *string `json:"description,omitempty"`
	ExpirationDate *string `json:"expirationDate,omitempty"`
	LinkType       *string `json:"linkType,omitempty"`
	MailingListID  *string `json:"mailingListId,omitempty"`
	SurveyID       *string `json:"surveyId,omitempty"`
}
